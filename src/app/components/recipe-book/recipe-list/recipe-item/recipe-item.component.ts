import { Component, Input, inject } from '@angular/core';
import { RecipeBookService } from '../../../../shared/recipe-book.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() id: number;
  recipeBookService = inject(RecipeBookService);

  onSelect() {
    this.recipeBookService.emittedRecipe.emit(this.recipe);
  }
}
