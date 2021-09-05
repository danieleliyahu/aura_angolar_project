import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() movies = new EventEmitter<string>();
  // @Output() childToParent = new EventEmitter<String>();
  ngOnInit(): void {}
  data: any = [];
  toggleAddTask(movieSearch: string) {
    this.newItemEvent.emit(movieSearch);
    this.movie.getData(movieSearch).subscribe((data: any) => {
      if (data.Response === 'False') {
        this.movies.emit('Movie not found');
        return;
      }
      this.movies.emit(data['Search']);
    });
  }
  constructor(private movie: MoviesService) {}
}
