import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Eggs', 1),
    new Ingredient('Milk', 1),
    new Ingredient('Bread', 1),
  ];

  addIng(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
