import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchType } from 'src/app/common/model/enums/search-type.enum';
import { SpotifyService } from '../../common/services/spotify.service';
import { SearchParentComponent } from '../search-parent/search-parent.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent extends SearchParentComponent implements OnInit, OnDestroy {
  public type = SearchType.ALBUM;

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
