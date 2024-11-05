import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { MyformlyComponent } from './myformly/myformly.component';
import { TaigaFormsComponent } from './taiga/taiga-forms/taiga-forms.component';
import { PlainFormComponent } from './plain-form/plain-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyFormComponent,
    MyformlyComponent,
    TuiRoot,
    TaigaFormsComponent,
    PlainFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-forms-signals';
}
