import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";
import { LatestItems } from "./components/latest-items/latest-items";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About, Footer, LatestItems],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Day1';
}
