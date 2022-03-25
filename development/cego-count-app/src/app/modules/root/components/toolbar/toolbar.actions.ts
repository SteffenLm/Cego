import { createAction } from '@ngrx/store';

const homeClicked = createAction('[Root Module | Toolbar] Home Clicked');

const settingsClicked = createAction(
  '[Root Module | Toolbar] Settings Clicked'
);

export const ToolbarActions = { homeClicked, settingsClicked };
