import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Game } from '../../model/game.model';
import { selectAllGames } from '../../modules/state/slices/games/games.selectors';
import { GamesPageActions } from './games-page.actions';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss'],
})
export class GamesPageComponent implements OnInit {
  public allGames$: Observable<Game[]> = this.store.select(selectAllGames);
  public isLoading$: Observable<boolean> = of(false);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}

  onAddClick(): void {
    this.store.dispatch(GamesPageActions.addGameClicked());
  }
}
