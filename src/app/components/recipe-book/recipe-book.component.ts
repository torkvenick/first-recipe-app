import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
})
export class RecipeBookComponent {
  recipe: Recipe;
  openDetails(recipe: Recipe) {
    this.recipe = recipe;
  }
}
