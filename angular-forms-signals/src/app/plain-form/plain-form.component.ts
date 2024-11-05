import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export const initFrm = <T extends {}>(ctrls: T) =>
  inject(FormBuilder).nonNullable.group<T>(ctrls);

@Component({
  selector: 'app-plain-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './plain-form.component.html',
})
export class PlainFormComponent {
  checkoutForm = initFrm({
    name: ['', Validators.required],
    address: '',
  }); // automatic infer Typed Form

  onSubmit(): void {
    // Process checkout data here
    alert(`submit:
   ${JSON.stringify(this.checkoutForm.value)}`);
  }

  getFormValidationErrors() {
    Object.keys(this.checkoutForm.controls).forEach((key) => {
      const controlErrors = this.checkoutForm.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((keyError) => {
          console.log(
            'Key control: ' + key + ', keyError: ' + keyError + ', err value: ',
            controlErrors[keyError]
          );
        });
      }
    });
  }
}
