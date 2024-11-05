import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';

@Component({
  selector: 'app-taiga-forms',
  standalone: true,
  imports: [ReactiveFormsModule, TuiTextfield, CommonModule],
  templateUrl: './taiga-forms.component.html',
  styleUrl: './taiga-forms.component.scss',
})
export class TaigaFormsComponent {
  //example: https://stackblitz.com/edit/angular-taiga-form?file=src%2Fapp%2Ftui-form%2Ftui-form.component.ts

  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.com'),
  });
}
