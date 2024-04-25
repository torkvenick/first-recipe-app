import { Component, EventEmitter, Output } from '@angular/core';
import { GeneralService } from '../../shared/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  collapsed = true;

  constructor(private gService: GeneralService) {}
  onSelect(feature: string) {
    this.gService.navigatedPage.emit(feature);
  }
}
