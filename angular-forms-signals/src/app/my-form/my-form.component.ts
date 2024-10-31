import { JsonPipe } from '@angular/common';
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
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  #formBuilder = inject(FormBuilder);
  profileForm = this.#formBuilder.group(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(),
      country: new FormControl('', Validators.required),
    },
    {
      updateOn: 'blur',
    }
  );

  emailSignal = toSignal(
    this.profileForm.get('email')?.valueChanges.pipe(debounceTime(300)) ??
      of(null),
    {}
  );

  submittedResults = toSignal(this.profileForm.valueChanges, {});

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
