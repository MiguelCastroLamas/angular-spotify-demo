import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchType } from 'src/app/common/model/enums/search-type.enum';
import { SpotifyService } from '../../common/services/spotify.service';
import { SearchParentComponent } from '../search-parent/search-parent.component';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent extends SearchParentComponent implements OnInit, OnDestroy {
  public type = SearchType.TRACK;

  constructor(
    protected api: SpotifyService
  ) {
    super(api);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

}
