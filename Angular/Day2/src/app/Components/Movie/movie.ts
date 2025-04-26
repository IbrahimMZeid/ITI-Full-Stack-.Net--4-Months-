import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardMovies } from './card-movies/card-movies';
import { AddMovie } from './add-movie/add-movie';
import { FilterMovies } from './filter-movies/filter-movies';

@Component({
  selector: 'app-movie',
  imports: [FormsModule, CardMovies, AddMovie, FilterMovies],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie {
  Categories: string[] = [
    'Action',
    'Crime',
    'Drama',
    'Fantasy',
    'Horror',
    'Romance',
  ];
  MovieList: {
    Name: string;
    Description: string;
    Author: string;
    Rate: number;
    Category: string;
    Image: string;
  }[] = [
    {
      Name: 'The Shawshank Redemption',
      Description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      Author: 'Frank Darabont',
      Rate: 9.3,
      Category: 'Drama',
      Image:
        'https://th.bing.com/th/id/R.ca86e305130c75e910bd9c061de79b2a?rik=ykKcDajgJ36i%2fQ&pid=ImgRaw&r=0',
    },
    {
      Name: 'The Godfather',
      Description:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      Author: 'Francis Ford Coppola',
      Rate: 9.2,
      Category: 'Crime',
      Image:
        'https://th.bing.com/th/id/R.b611ffb8e54a8ad757c4d43b5739afe3?rik=73Slj%2bElqov1kQ&pid=ImgRaw&r=0',
    },
    {
      Name: 'Pulp Fiction',
      Description:
        'A burger-loving hit man, his philosophical partner, a drug-addled gangster, and a prostitute form an unlikely alliance to protect their city from the ruthless henchmen of a ruthless boss.',
      Author: 'Quentin Tarantino',
      Rate: 4.9,
      Category: 'Crime',
      Image:
        'https://th.bing.com/th/id/OIP.3Xvyx4kaXy-VBy1Vxe_fHQHaDt?w=295&h=174&c=7&r=0&o=7&pid=1.7&rm=3',
    },
    {
      Name: 'The Dark Knight',
      Description:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his greatest challenges as a dark knight.',
      Author: 'Christopher Nolan',
      Rate: 9.0,
      Category: 'Action',
      Image:
        'https://th.bing.com/th/id/OIP.Z-abpaw6SQyGf6THsACc4wHaEK?rs=1&pid=ImgDetMain&cb=idpwebp1&o=7&rm=3',
    },
  ];
  filteredMovies: {
    Name: string;
    Description: string;
    Author: string;
    Rate: number;
    Category: string;
    Image: string;
  }[] = this.MovieList;

  filterName: string = '';
  filterCategory: string = 'All';

  addMovie(movie: {
    Name: string;
    Description: string;
    Author: string;
    Rate: number;
    Category: string;
    Image: string;
  }) {
    this.MovieList.push(movie);
    this.filterMovies({
      filterName: this.filterName,
      filterCategory: this.filterCategory,
    });
  }

  filterMovies(filter: { filterName: string; filterCategory: string }) {
    this.filterName = filter.filterName;
    this.filterCategory = filter.filterCategory;
    this.filteredMovies = this.MovieList.filter(
      (movie) =>
        movie.Name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        (this.filterCategory.toLowerCase() == 'all' ||
          movie.Category.toLowerCase().includes(
            this.filterCategory.toLowerCase()
          ))
    );
  }
  deleteMovie(index: number) {
    this.MovieList.splice(index, 1);
    this.filterMovies({
      filterName: this.filterName,
      filterCategory: this.filterCategory,
    });
  }
}
