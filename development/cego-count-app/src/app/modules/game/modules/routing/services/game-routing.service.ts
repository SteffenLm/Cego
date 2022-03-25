import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameRoutePath } from '../model/game-route-path.enum';
import { GAMES_ROUTING_ROOT_PATH } from '../token/games-routing-root-path.token';

@Injectable()
export class GameRoutingService {
  constructor(
    @Inject(GAMES_ROUTING_ROOT_PATH) private readonly rootPath: string,
    private readonly router: Router
  ) {}

  public navigateToGamesHome() {
    this.router.navigate([this.rootPath]);
  }

  public navigateToGamesAdd() {
    this.router.navigate([this.rootPath, GameRoutePath.AddGame]);
  }
}
