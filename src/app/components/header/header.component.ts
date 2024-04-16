import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;
  @Output() tabClicked = new EventEmitter<boolean>();
  @Output() featureSelected = new EventEmitter<string>();
  openRecipes() {
    this.tabClicked.emit(true);
  }
  openShoppingList() {
    this.tabClicked.emit(false);
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
