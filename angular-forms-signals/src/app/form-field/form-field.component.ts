import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ContentChild,
  inject,
  input,
  Input,
  TemplateRef,
} from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  controlName = input<string>();

  @ContentChild(TemplateRef, { static: true }) inputTemplate!: TemplateRef<any>;

  private controlContainer = inject(ControlContainer);
  control = computed(() => {
    const controlName = this.controlName();
    if (!controlName) return null;
    const formGroup = this.controlContainer.control as FormGroup;
    return formGroup.get(controlName);
  });

  errorMessaged = computed(() => {
    const control = this.control();
    if (!control) return null;
    const errors = control.errors;
    if (!errors) return null;

    return Object.keys(errors).map((key) => {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'email':
          return 'Please enter a valid email';
        // Add more error messages as needed
        default:
          return 'Invalid input';
      }
    });
  });
}
