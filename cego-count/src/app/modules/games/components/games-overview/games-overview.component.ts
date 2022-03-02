import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
} from '@angular/animations';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-games-overview',
  templateUrl: './games-overview.component.html',
  styles: [''],
  animations: [
    trigger('item', [
      transition(':enter', [
        style({ opacity: 0 }), // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ opacity: 1 })), // final
      ]),
    ]),
    trigger('list', [
      transition(':enter', [
        query('@item', stagger(50, animateChild()), { optional: true }),
      ]),
    ]),
  ],
})
export class GamesOverviewComponent implements OnInit {
  public games: any[];

  constructor(private gamesService: GamesService) {}

  public ngOnInit(): void {
    this.games = this.gamesService.getGames();
  }
}
