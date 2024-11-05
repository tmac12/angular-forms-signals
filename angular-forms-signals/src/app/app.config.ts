import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldType } from './input-field-type/input-field-type.component';
import { FormlyWrapperComponent } from './formly-wrapper/formly-wrapper.component';

export function minLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `Should have atleast ${field.props?.minLength} characters`;
}

export function maxLengthValidationMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `This value should be less than ${field.props?.maxLength} characters`;
}

export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props?.min}`;
}

export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.max}`;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([
      ReactiveFormsModule,
      FormlyModule.forRoot({
        types: [{ name: 'input', component: InputFieldType }],
        wrappers: [{ name: 'panel', component: FormlyWrapperComponent }],
        validationMessages: [
          { name: 'required', message: 'This field is required' },
          { name: 'minLength', message: minLengthValidationMessage },
          { name: 'maxLength', message: maxLengthValidationMessage },
          { name: 'min', message: minValidationMessage },
          { name: 'max', message: maxValidationMessage },
        ],
      }),
    ]),
  ],
};
