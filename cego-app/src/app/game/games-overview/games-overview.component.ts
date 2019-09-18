import { Component, OnInit } from '@angular/core';
import { ServerGames } from '../game.model';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-games-overview',
  templateUrl: './games-overview.component.html',
  styleUrls: ['./games-overview.component.scss'],
  animations: [
    trigger('item', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@item', stagger(50, animateChild()))
      ]),
    ])
  ]
})
export class GamesOverviewComponent implements OnInit {

  public games: ServerGames[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.games = this.route.snapshot.data.games;
  }

}
