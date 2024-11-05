import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperComponent } from '../formly-wrapper/formly-wrapper.component';

@Component({
  selector: 'app-myformly',
  standalone: true,
  imports: [CommonModule, FormlyModule, ReactiveFormsModule],
  templateUrl: './myformly.component.html',
  styleUrl: './myformly.component.scss',
})
export class MyformlyComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      wrappers: [FormlyWrapperComponent],
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
      validation: {
        show: true,
      },
    },
    {
      key: 'age',
      type: 'input',
      wrappers: [FormlyWrapperComponent],
      props: {
        label: 'Age (min= 18, max= 40)',
        type: 'number',
        min: 18,
        max: 40,
        required: true,
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
