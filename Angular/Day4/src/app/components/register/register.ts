import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DangerSpan } from '../../shared/danger-span/danger-span';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, DangerSpan],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  @Output() newUserEvent = new EventEmitter();
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]{3,}'),
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(18, [Validators.required, Validators.min(18)]),
    address: new FormControl('', [Validators.required]),
  });

  get getName() {
    return this.registerForm.controls['name'];
  }
  get getEmail() {
    return this.registerForm.controls['email'];
  }
  get getAge() {
    return this.registerForm.controls['age'];
  }
  get getAddress() {
    return this.registerForm.controls['address'];
  }
  addNewUser() {
    if (this.registerForm.invalid) return;
    this.newUserEvent.emit(this.registerForm.value);
  }
}
