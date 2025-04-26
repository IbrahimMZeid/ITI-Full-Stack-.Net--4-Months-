import { Component } from '@angular/core';
import { Card } from "./card/card";

@Component({
  selector: 'app-latest-items',
  imports: [Card],
  templateUrl: './latest-items.html',
  styleUrl: './latest-items.css'
})
export class LatestItems {

}
