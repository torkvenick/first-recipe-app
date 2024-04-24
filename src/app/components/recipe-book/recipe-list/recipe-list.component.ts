import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../../../shared/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipeBookService = inject(RecipeBookService);
  recipes: Recipe[];

  ngOnInit() {
    this.recipes = this.recipeBookService.recipes;
  }
}
