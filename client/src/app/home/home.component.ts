import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any[] = [];
  constructor(private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(environment.url + '/api');
      data['response']['status'] ? this.articles = data['response']['articles'] : console.log("Data not OK");
      console.log(this.articles);
    } catch(error) {
      console.log("Error connecting to server");
    }
  }

}
