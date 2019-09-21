import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { ServerPlayer } from './game-add.model';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/core/login/login.service';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.scss'],
  animations: [
    trigger('item', [
      transition(':enter', [
        style({ transform: 'scale(0.3)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])]
})
export class GameAddComponent implements OnInit {
  private allPlayers: ServerPlayer[];
  public filteredPlayers: ServerPlayer[];
  constructor(private route: ActivatedRoute, private loginService: LoginService) {
    this.allPlayers = this.route.snapshot.data.players;
    this.filteredPlayers = this.allPlayers;
  }

  public ngOnInit(): void {

  }

  public displayPlayer(selectedPlayer: ServerPlayer): string {
    return selectedPlayer.username;
  }

  public getUsername(): string {
    return this.loginService.getUsername();
  }
}
