import { Component, OnInit, Output} from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  articles: any[] = [];
  constructor(private category: CategoryService) { }

  async ngOnInit() {
    this.category.currentData.subscribe(category => this.articles = category);
  }

  updateCategory(cat: string) {
    this.category.setCategory(cat);
  }

}
