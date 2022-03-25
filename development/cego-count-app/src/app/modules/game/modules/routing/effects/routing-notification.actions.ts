import { createAction } from '@ngrx/store';

const navigatedToGamesPage = createAction(
  '[Game Module | Routing Notifications] Navigated to Games Home'
);

const navigatedToGamesAdd = createAction(
  '[Game Module | Routing Notifications] Navigated to Games Add'
);

export const RouterNotificationActions = {
  navigatedToGamesPage,
  navigatedToGamesAdd,
};
