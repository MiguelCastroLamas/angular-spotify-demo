import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { SearchType } from 'src/app/common/model/enums/search-type.enum';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectedCategory: BehaviorSubject<SearchType>;

  constructor(
    private router: Router,
    private api: SpotifyService
  ) {
    this.selectedCategory = new BehaviorSubject<SearchType>(SearchType.ARTIST);

    this.router.events.pipe(
      filter((event) => event instanceof RoutesRecognized),
      distinctUntilChanged(),
    ).subscribe((e: RoutesRecognized) => {
      this.selectedCategory.next(e.state.root.firstChild.data.section || SearchType.ARTIST);
      this.api.result.next(null);
    });
  }
}
