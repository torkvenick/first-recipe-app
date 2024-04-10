import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Pizza", "Pizza is the most popular dish in the world.", "https://www.yummytummyaarthi.com/wp-content/uploads/2015/11/chicken-pizza-1.jpeg")
  ]; 
}
