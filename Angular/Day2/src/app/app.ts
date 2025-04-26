import { Component } from '@angular/core';
import { Movie } from './Components/Movie/movie';
import { InputTask } from './Components/input-task/input-task';
import { Home } from './Components/Home/home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Movie, InputTask, Home, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Day2';
  selectedTab: string = 'home';

  changeTab(tab: string) {
    this.selectedTab = tab;
  }
}
