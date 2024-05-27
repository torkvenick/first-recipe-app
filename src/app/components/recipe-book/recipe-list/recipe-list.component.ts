import { Component, OnInit, inject } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../../../shared/recipe-book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rbService: RecipeBookService
  ) {}

  ngOnInit() {
    this.recipes = this.rbService.getRecipes();
  }

  createNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
