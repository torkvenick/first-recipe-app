import { EventEmitter, Injectable, inject } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class GeneralService {
  navigatedPage = new EventEmitter<string>();
  slService = inject(ShoppingListService);
  navToShopList(ings: Ingredient[]) {
    this.navigatedPage.emit('shopping-list');
    this.slService.addIng(ings);
  }
}
