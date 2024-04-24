import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from '../components/recipe-book/recipe.model';

@Injectable()
export class RecipeBookService {
  @Output() emittedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Pizza is the most popular dish in the world.',
      'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*'
    ),
    new Recipe(
      'Pizzetto',
      'Pizzetto is the most popular dish in the world.',
      'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*'
    ),
  ];

  selectRecipe(id: number, recipe?: Recipe) {
    this.emittedRecipe.emit(this.recipes[id]);
  }
}
