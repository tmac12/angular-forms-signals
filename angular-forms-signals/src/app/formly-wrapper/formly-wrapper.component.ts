import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-row">
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
          <div class="input-container">
            <label class="label">
              <span class="label-text">{{ props.label }}</span>
            </label>
            <ng-container #fieldComponent></ng-container>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FormlyWrapperComponent extends FieldWrapper {}
