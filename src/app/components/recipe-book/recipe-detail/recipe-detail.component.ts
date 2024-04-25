import { Component, Input, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../../../shared/recipe-book.service';
import { GeneralService } from '../../../shared/general.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  gService = inject(GeneralService);
  toShopList() {
    this.gService.navToShopList(this.recipe.ingredients);
  }
}
