import { Component } from '@angular/core';
import { GeneralService } from './shared/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prop: string;
  isRecipeOpened = false;
  navigatedPage = 'recipe';

  constructor(private glService: GeneralService) {
    this.glService.navigatedPage.subscribe(
      (page) => (this.navigatedPage = page)
    );
  }
  showSection(isRecipeSection: boolean) {
    this.isRecipeOpened = isRecipeSection;
  }

  onNavigate(feature: string) {
    this.navigatedPage = feature;
  }
}
