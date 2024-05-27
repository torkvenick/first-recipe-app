import { Component, Input, OnInit, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../../../shared/recipe-book.service';
import { GeneralService } from '../../../shared/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private gService: GeneralService,
    private rService: RecipeBookService
  ) {}
  toShopList() {
    this.gService.navToShopList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idx = params['id'];
      this.recipe = this.rService.getRecipes()[idx];
    });
  }
}
