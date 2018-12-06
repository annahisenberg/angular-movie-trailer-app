import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../omdb.service';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieData: any;
  name: string = '';
  youtubeDataId: any;
  youtubeURL: any;

  constructor(private service: OmdbService, private youtubeService: YoutubeService) { }

  onSearch() {
    this.service.getMovies(this.name).subscribe((resp: any) => {
      console.log(resp);
      this.movieData = resp;
    });
  }

  onClickSearchYoutube() {
    this.youtubeService.getYoutubeResults(this.name).subscribe((resp: any) => {
      this.youtubeDataId = resp.items[0].id.videoId;
      this.youtubeURL = `https://www.youtube.com/embed/${this.youtubeDataId}`;
      console.log(this.youtubeURL);
    });
  }

  ngOnInit() {
  }


}
