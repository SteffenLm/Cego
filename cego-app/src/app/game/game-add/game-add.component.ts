import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

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

  constructor() { }

  public ngOnInit(): void {
  }

}
