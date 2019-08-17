import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss']
})
export class MenuEntryComponent implements OnInit {

  @Input() public icon: string;
  @Input() public text: string;

  constructor() { }

  public ngOnInit(): void { }
}
