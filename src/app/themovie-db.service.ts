import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemovieDBService {

  constructor(private http: HttpClient) { }

  getMoviesInTheaters() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=2cfb30dcded79dc38dd73157bb6ca702&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22')
  }
}
