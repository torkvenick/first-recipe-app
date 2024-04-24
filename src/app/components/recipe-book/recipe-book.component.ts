import { Component, OnInit, inject } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from '../../shared/recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
})
export class RecipeBookComponent implements OnInit {
  recipe: Recipe;
  recipeBookService = inject(RecipeBookService);
  ngOnInit() {
    this.recipeBookService.emittedRecipe.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
