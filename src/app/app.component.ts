import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-aura';
  data: any = [];
  movieName = '';
  movieNotFound = '';
  moviesList(movies: any) {
    if (movies === 'Movie not found') {
      this.data = [];
      this.movieNotFound = movies;
    } else {
      this.movieNotFound = '';
      this.data = movies;
    }
  }

  addItem(newItem: string) {
    return (this.movieName = newItem);
  }
}
