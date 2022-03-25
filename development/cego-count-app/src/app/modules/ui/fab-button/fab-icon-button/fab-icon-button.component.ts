import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fab-icon-button',
  templateUrl: './fab-icon-button.component.html',
  styleUrls: ['./fab-icon-button.component.scss'],
})
export class FabIconButtonComponent {
  @Input()
  public color: string = 'primary';
  @Input()
  public icon: string = 'add';
}
