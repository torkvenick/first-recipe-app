import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    // new Ingredient('Eggs', 1),
    // new Ingredient('Milk', 1),
    // new Ingredient('Bread', 1),
  ];
  public ings = this.ingredients;

  addIng(ings: Ingredient[]) {
    ings.forEach((ingr) => {
      if (!this.ingredients.includes(ingr)) this.ingredients.push(ingr);
    });
  }
}
