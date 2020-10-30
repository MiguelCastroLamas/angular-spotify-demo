import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchType } from 'src/app/common/model/enums/search-type.enum';
import { SpotifyService } from '../../common/services/spotify.service';
import { AppService } from '../../common/services/app.service';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  id: string;
  value: string;
  category: SearchType;

  constructor(
    private api: SpotifyService,
    private app: AppService,
    private router: Router
  ) {
    this.app.selectedCategory.subscribe((c: SearchType) => this.category = c);

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe((e: NavigationEnd) => {
      this.value = '';
    });
  }

  ngOnInit(): void { }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-30
   * @description Launch a search request
   * @param       event Event
   */
  search(event): void {
    this.api.search(this.value, this.category);
  }
}
