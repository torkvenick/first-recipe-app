import { Component, Input, OnInit, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../../../shared/recipe-book.service';
import { GeneralService } from '../../../shared/general.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gService: GeneralService,
    private rService: RecipeBookService
  ) {}
  toShopList() {
    this.gService.navToShopList(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idx = params['id'];
      this.recipe = this.rService.getRecipe(idx);
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
