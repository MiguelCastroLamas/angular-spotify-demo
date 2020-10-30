import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../../../common/model/interfaces/spotify/elements/artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: Artist = {} as Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
