import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getData(movieName: any) {
    console.log(movieName);
    // let url = `https://www.omdbapi.com/?apikey=f24c8faa&s=${movieName}`;
    let url = `https://www.omdbapi.com/?apikey=f24c8faa&s=${movieName}`;

    return this.http.get(url);
  }
}
