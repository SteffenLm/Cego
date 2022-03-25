import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Game } from '../../model/game.model';
import { exampleGame } from '../../model/game.model.spec';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameListComponent {
  @Input() games: Game[] = [];
  @Output() listItemClick: EventEmitter<Game> = new EventEmitter();

  public onGameClicked(game: Game): void {
    this.listItemClick.next(game);
  }
}
