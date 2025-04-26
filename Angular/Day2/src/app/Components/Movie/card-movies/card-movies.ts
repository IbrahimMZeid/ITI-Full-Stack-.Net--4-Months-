import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-card-movies',
  imports: [CommonModule],
  templateUrl: './card-movies.html',
  styleUrl: './card-movies.css',
})
export class CardMovies {
  @Output() deleteMovieEvent = new EventEmitter();
  @Input() index!: number;
  @Input() movie!: {
    Name: string;
    Description: string;
    Author: string;
    Rate: number;
    Category: string;
    Image: string;
  };
  deleteMovie() {
    this.deleteMovieEvent.emit(this.index);
  }
}
