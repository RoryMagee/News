import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CategoryService]
})

export class AppComponent {
  searchTerm= '';
  currentCategory = '';

  constructor(private category: CategoryService) {}

  ngOnInit() {
    this.category.currentData.subscribe(category => this.currentCategory = category);
  }
  
  search() {

  }
}

