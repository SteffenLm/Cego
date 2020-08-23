import { Component, OnInit, Input } from '@angular/core';
import { Round } from '../../shared/round.model';

@Component({
  selector: 'app-round-list',
  templateUrl: './round-list.component.html',
  styles: []
})
export class RoundListComponent implements OnInit {

  @Input() public rounds: Round[];
  @Input() public players: string[];
  public data: any;

  constructor() { }

  ngOnInit(): void {
    const data = {};
    this.players.forEach(player => {
      data[player] = [];
    });
    this.rounds.forEach(round => {
      if (round.value > 0) {
        const winnerArray = data[round.player];
        winnerArray.push(round.value * 3);
        const losers = this.players.slice().filter(player => player !== round.player);
        data[losers[0]].push(-Math.abs(round.value));
        data[losers[1]].push(-Math.abs(round.value));
        data[losers[2]].push(-Math.abs(round.value));
      } else {
        const looserArray = data[round.player];
        looserArray.push(round.value * 3);
        const winners = this.players.slice().filter(player => player !== round.player);
        data[winners[0]].push(Math.abs(round.value));
        data[winners[1]].push(Math.abs(round.value));
        data[winners[2]].push(Math.abs(round.value));
      }
    });
    this.data = data;
  }

  public calculateSum(player: string): number {
    return this.data[player].reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  public calculatePlayer(player: string, index: number): number {
    this.ngOnInit();
    return this.data[player][index];
  }
}
