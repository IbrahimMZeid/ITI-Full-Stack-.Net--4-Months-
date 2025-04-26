import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  @Output() logoutEvent = new EventEmitter();
  @Input() user!: {
    name: string;
    age: number;
    email: string;
    address: string;
  };
  logout() {
    this.logoutEvent.emit();
  }
}
