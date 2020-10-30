import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchType } from 'src/app/common/model/enums/search-type.enum';
import { SpotifyService } from '../../common/services/spotify.service';
import { SearchParentComponent } from '../search-parent/search-parent.component';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent extends SearchParentComponent implements OnInit, OnDestroy {
  public type = SearchType.ARTIST;

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
