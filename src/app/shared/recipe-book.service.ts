import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from '../components/recipe-book/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class RecipeBookService {
  @Output() emittedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Pizza is the most popular dish in the world.',
      'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Onion', 1),
      ]
    ),
    new Recipe(
      'Fries',
      'Fries is just a potato in a fry',
      'https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg?w=500&h=500&crop=1',
      [
        new Ingredient('Mozarella', 2),
        new Ingredient('Ananas', 6),
        new Ingredient('Potato', 3),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
