import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  formBuilder = inject(FormBuilder);
  profileForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: '',
    country: new FormControl('', Validators.required),
  });

  emailSignal = toSignal(
    this.profileForm.get('email')?.valueChanges.pipe(debounceTime(300)) ??
      of(null),
    {}
  );

  // constructor() {
  //   this.profileForm = this.formBuilder.group({
  //     email: new FormControl('', Validators.required),
  //     password: '',
  //   });
  // }

  onSubmit() {
    console.log('submited values: ', this.profileForm.value);
  }
}
