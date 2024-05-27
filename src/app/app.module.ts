import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeBookService } from './shared/recipe-book.service';
import { ShoppingListService } from './shared/shopping-list.service';
import { GeneralService } from './shared/general.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [GeneralService, RecipeBookService, ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
