import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css',
})
export class AddMovie {
  @Input() Categories!: string[];
  @Output() addMovieEvent = new EventEmitter<{
    Name: string;
    Description: string;
    Author: string;
    Rate: number;
    Category: string;
    Image: string;
  }>();
  movieNme: string = '';
  movieDesc: string = '';
  movieAuthor: string = '';
  movieRate: number = 1;
  movieImage: string = '';
  movieCategory: string = 'Action';
  filterName: string = '';
  filterCategory: string = 'All';
  addMovie() {
    if (
      this.movieNme.trim() == '' ||
      this.movieDesc.trim() == '' ||
      this.movieAuthor.trim() == '' ||
      this.movieRate == 0 ||
      this.movieRate > 10 ||
      this.movieImage.trim() == ''
    ) {
      alert('Please Enter Valid Data');
      return;
    }
    this.addMovieEvent.emit({
      Name: this.movieNme,
      Description: this.movieDesc,
      Author: this.movieAuthor,
      Rate: this.movieRate,
      Category: this.movieCategory,
      Image: this.movieImage,
    });

    this.movieNme = '';
    this.movieDesc = '';
    this.movieAuthor = '';
    this.movieRate = 1;
    this.movieImage = '';
    this.movieCategory = 'Action';
  }
}
