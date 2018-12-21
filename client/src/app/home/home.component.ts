import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any[] = [];
  category: any = '';
  constructor(private rest: RestApiService) { }

  async ngOnInit() {
    this.getArticles(this.category);
  }

  async getArticles(category: any) {
    try {
      if (this.category) {
        const data = await this.rest.get(environment.url + '/api/' + this.category);
        data['response']['status'] ? this.articles = data['response']['articles'] : console.log("Data not OK");
      } else {
        const data = await this.rest.get(environment.url + '/api/');
        data['response']['status'] ? this.articles = data['response']['articles'] : console.log("Data not OK");
      }      
    } catch(error) {
      console.log("error connecting to server");
    }
  }
}
