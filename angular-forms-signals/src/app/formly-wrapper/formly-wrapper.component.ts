import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper',
  standalone: true,
  imports: [CommonModule, FormlyModule],
  template: `
    <div class="flex flex-row">
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
          <div class="input-container">
            <label class="label">
              <span class="label-text">{{ props.label }}</span>
            </label>
            <ng-container #fieldComponent></ng-container>
            @if (showError){
            <!-- <div class="text-xs text-error">{{ field | json }}</div>
            <div class="text-xs text-error">{{ to | json }}</div>
            <div class="text-xs text-error">
              {{ formControl.validator | json }}
            </div> -->
            <formly-validation-message
              [field]="field"
            ></formly-validation-message>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FormlyWrapperComponent extends FieldWrapper {}
