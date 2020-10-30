import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../common/services/spotify.service';

@Component({
  selector: 'app-search-parent',
  templateUrl: './search-parent.component.html',
  styleUrls: ['./search-parent.component.css']
})
export class SearchParentComponent implements OnInit, OnDestroy {
  public result: Array<any>;

  constructor(
    protected api: SpotifyService
  ) {
    this.api.result.subscribe((r: any) => this.result = r);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }


}
