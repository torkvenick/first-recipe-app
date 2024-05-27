import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeRoutingModule } from './components/recipe-book/recipe-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  { path: 'recipe-book', component: RecipeBookComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/shopping-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RecipeRoutingModule],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
