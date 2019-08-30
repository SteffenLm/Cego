import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Observable } from 'rxjs';
import { ServerGames } from '../game.model';


@Component({
  selector: 'app-games-overview',
  templateUrl: './games-overview.component.html',
  styleUrls: ['./games-overview.component.scss']
})
export class GamesOverviewComponent implements OnInit {

  public games: Observable<ServerGames[]>;

  constructor(public gamesService: GameService) { }

  ngOnInit() {
    this.games = this.gamesService.getAllGames();
  }

}
