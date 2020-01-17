



import {Component, OnInit} from '@angular/core';
import { RecipeService } from '../recipe.service';

/**
 * @title Paginator
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data$ = this.recipeService.getRecipes();
  data = [];


  page = 0;
  size = 12;

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.data$.subscribe(data => this.getData({pageIndex: this.page, pageSize: this.size}, data));
  }

  getData(obj, data2) {
    let index = 0;
    const startingIndex = obj.pageIndex * obj.pageSize;
    const endingIndex = startingIndex + obj.pageSize;
    this.data = data2.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

}
