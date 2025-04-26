import { Component } from '@angular/core';
import { Register } from './components/register/register';
import { Profile } from './components/profile/profile';

@Component({
  selector: 'app-root',
  imports: [Register, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Day4';
  isRegister = false;
  user: {
    name: string;
    age: number;
    email: string;
    address: string;
  } = {
    name: '',
    age: 0,
    email: '',
    address: '',
  };

  register(data: any) {
    this.isRegister = true;
    this.user = data;
  }
}
