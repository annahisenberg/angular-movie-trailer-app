import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getYoutubeResults(movie) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?q=${movie}trailer&part=snippet&key=AIzaSyAQ_wtiTyaykWznsGkGKlRjeBqDTN3AiDQ`);
  }
}
