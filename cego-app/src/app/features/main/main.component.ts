import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '<app-header></app-header><app-menu></app-menu>',
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void { }

}
