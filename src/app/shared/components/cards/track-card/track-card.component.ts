import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../../common/model/interfaces/spotify/elements/track';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {
  @Input() track: Track = {} as Track;

  constructor() { }

  ngOnInit(): void { }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Convert time in milliseconds to hours, minutes and seconds
   * @param       milliseconds Time in milliseconds
   * @returns     Time converted
   */
  getTrackDuration(milliseconds: number) {
    let h: any = Math.floor(milliseconds / 1000 / 60 / 60);
    let m: any = Math.floor((milliseconds / 1000 / 60 / 60 - h) * 60);
    let s: any = Math.floor(((milliseconds / 1000 / 60 / 60 - h) * 60 - m) * 60);
    s < 10 ? s = `0${s}` : s = `${s}`;
    m < 10 ? m = `0${m}` : m = `${m}`;
    h < 10 ? h = `0${h}` : h = `${h}`;

    const result = h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
    return result;
  }
}
