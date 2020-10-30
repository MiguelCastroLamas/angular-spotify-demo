import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/common/model/interfaces/spotify/elements/album';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: Album = {} as Album;

  constructor() { }

  ngOnInit(): void {
  }

}
