import { Component, OnInit } from '@angular/core';
import { SearchType } from 'src/app/common/model/enums/search-type.enum';
import { AppService } from '../../common/services/app.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  categories = SearchType;
  categoryKeys: Array<string>;
  category: SearchType;

  constructor(
    private app: AppService
  ) {
    this.categoryKeys = Object.keys(this.categories);
    this.app.selectedCategory.subscribe((c: SearchType) => this.category = c);
  }

  ngOnInit(): void { }
}
