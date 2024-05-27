import { Component, Input } from '@angular/core';
import { RecipeBookService } from '../../../../shared/recipe-book.service';
import { Recipe } from '../../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() id: number;

  constructor(private router: Router, private rbService: RecipeBookService) {}

  onSelect() {
    this.router.navigate(['/recipe-book', this.id]);
  }
}
