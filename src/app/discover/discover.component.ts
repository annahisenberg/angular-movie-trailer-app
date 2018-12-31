import { Component, OnInit } from '@angular/core';
import { ThemovieDBService } from '../themovie-db.service';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  data: any;
  youtubeDataId: any;
  youtubeURL: any;

  constructor(private service: ThemovieDBService, private youtubeService: YoutubeService) { }

  onDiscoverMoviesInTheaters() {
    this.youtubeDataId = null;
    this.service.getMoviesInTheaters().subscribe((resp: any) => {
      this.data = resp.results.splice(0, 10);
    });
  }

  searchYoutube(movieTitle) {
    this.youtubeService.getYoutubeResults(movieTitle).subscribe((resp: any) => {
      this.youtubeDataId = resp.items[0].id.videoId;
      this.youtubeURL = `https://www.youtube.com/embed/${this.youtubeDataId}`;
      this.data = [];
    });
  }

  ngOnInit() {
  }


}
