import { Component } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Footer } from './footer/footer';
import { LatestItems } from './latest-items/latest-items';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, About, Footer, LatestItems],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
