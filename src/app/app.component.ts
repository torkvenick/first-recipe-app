import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prop: string;
  isRecipeOpened = false;
  navigatedPage = 'recipe';
  showSection(isRecipeSection: boolean) {
    this.isRecipeOpened = isRecipeSection;
  }

  onNavigate(feature: string) {
    this.navigatedPage = feature;
  }
}
