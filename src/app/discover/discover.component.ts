import { Component, OnInit } from '@angular/core';
import { ThemovieDBService } from '../themovie-db.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  data: any;

  constructor(private service: ThemovieDBService) { }

  onDiscoverMoviesInTheaters() {
    this.service.getMoviesInTheaters().subscribe((resp: any) => {
      this.data = resp.results.splice(0, 10);
      console.log(this.data);
    });
  }

  ngOnInit() {
  }


}
