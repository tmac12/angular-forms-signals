import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertService, TuiError, TuiTextfield } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import {
  tuiCreateLuhnValidator,
  TuiInputCard,
  tuiInputCardOptionsProvider,
  TuiInputCVC,
  TuiInputExpire,
} from '@taiga-ui/addon-commerce';

@Component({
  selector: 'app-taiga-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiTextfield,
    CommonModule,
    TuiError,
    TuiFieldErrorPipe,
    TuiInputCard,
    TuiInputCVC,
    TuiInputExpire,
  ],
  templateUrl: './taiga-forms.component.html',
  styleUrl: './taiga-forms.component.scss',
})
export class TaigaFormsComponent {
  //example: https://stackblitz.com/edit/angular-taiga-form?file=src%2Fapp%2Ftui-form%2Ftui-form.component.ts

  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.com'),
  });

  protected readonly form = new FormGroup({
    card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),
    expire: new FormControl(''),
    cvc: new FormControl(''),
  });

  private readonly alerts = inject(TuiAlertService);
  protected onBinChange(bin: string | null): void {
    this.alerts.open(String(bin), { label: '(binChange)' }).subscribe();
  }
}
