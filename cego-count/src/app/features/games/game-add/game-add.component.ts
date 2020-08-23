import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { GamesService } from '../shared/games.service';
import { Game } from '../shared/game.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styles: [],
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

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      players: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required]),
        this.formBuilder.control('', [Validators.required]),
        this.formBuilder.control('', [Validators.required]),
        this.formBuilder.control('', [Validators.required])
      ])
    });
  }
  get players(): FormArray {
    return this.form.get('players') as FormArray;
  }

  public onSubmit(): void {
    this.gamesService.createGame(this.form.value as Game);
    const length = --this.gamesService.getGames().length;
    this.router.navigate(['/games', length]);
  }
}
