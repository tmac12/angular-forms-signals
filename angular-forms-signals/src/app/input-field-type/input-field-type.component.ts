import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule],
  template: `
    <input
      type="input"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
})
export class InputFieldType extends FieldType<FieldTypeConfig> {}
