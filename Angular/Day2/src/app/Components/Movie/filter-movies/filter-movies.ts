import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-movies',
  imports: [FormsModule],
  templateUrl: './filter-movies.html',
  styleUrl: './filter-movies.css',
})
export class FilterMovies {
  @Output() filterMovieEvent = new EventEmitter();
  @Input() Categories!: string[];
  filterName: string = '';
  filterCategory: string = 'All';

  filterMovies() {
    this.filterMovieEvent.emit({
      filterName: this.filterName,
      filterCategory: this.filterCategory,
    });
  }
}
