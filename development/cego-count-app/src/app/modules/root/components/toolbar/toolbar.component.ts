import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToolbarActions } from './toolbar.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private readonly store: Store) {}

  public onHomeClick(): void {
    this.store.dispatch(ToolbarActions.homeClicked());
  }

  public onSettingsClick(): void {
    this.store.dispatch(ToolbarActions.settingsClicked());
  }
}
