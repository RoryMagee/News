import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { environment } from '../../environments/environment'
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any[] = [];
  constructor(private rest: RestApiService, private category: CategoryService) { }

  async ngOnInit() {
    await this.category.getArticles();
    this.articles = this.category.getList();
    this.category.currentData.subscribe(category => this.articles = category);
  }
  

}
