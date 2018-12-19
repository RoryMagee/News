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
  //carousel: any[] = [];
  mainArticle: any;
  constructor(private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(environment.url + '/api/science');
      data['response']['status'] ? this.articles = data['response']['articles'] : console.log("Data not OK");
      this.mainArticle = this.articles.pop();
      // for(var x = 0; x < 5; x++) {
      //   this.carousel.push(this.articles.pop());
      // }
      //console.log(this.carousel);
      console.log(this.articles);
    } catch(error) {
      console.log("Error connecting to server");
    }
  }

}
