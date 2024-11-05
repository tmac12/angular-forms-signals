import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Input,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  #controlContainer = inject(ControlContainer);
  controlName = input<string>();
  formControl: FormControl = {} as FormControl;

  control = computed(() => {
    const controlName = this.controlName();
    if (!controlName) return null;
    return (this.#controlContainer.control as FormGroup).get(
      controlName
    ) as FormControl;
  });

  myEffect = effect(() => {
    const controlName = this.controlName();
    if (!controlName) return;
    const formControl = (this.#controlContainer.control as FormGroup).get(
      controlName
    ) as FormControl;
    this.formControl = formControl;
    this.formControl.registerOnChange(() => {
      console.log('formControl changed');
    });
  });

  events = toSignal(this.formControl.events ?? of({}), {});

  get errorMessages() {
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
  }
}
