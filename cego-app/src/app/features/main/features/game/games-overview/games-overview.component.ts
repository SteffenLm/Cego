import { Component, OnInit } from '@angular/core';
import { ReadGameResponse } from '../shared/game.model';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-games-overview',
  templateUrl: './games-overview.component.html',
  styleUrls: ['./games-overview.component.scss'],
  animations: [
    trigger('item', [
      transition(':enter', [
        style({ opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ opacity: 1 }))  // final
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@item', stagger(50, animateChild()), { optional: true })
      ]),
    ])
  ]
})
export class GamesOverviewComponent implements OnInit {

  public games: ReadGameResponse[];

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.games = this.route.snapshot.data.games;
  }

}
