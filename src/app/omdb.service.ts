import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }

  getMovies(name) {
    return this.http.get(`http://www.omdbapi.com/?t=${name}&apikey=d9668940&`);
  }
}
