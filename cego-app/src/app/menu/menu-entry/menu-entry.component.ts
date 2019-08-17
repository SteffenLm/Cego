import { Component, OnInit, Input } from '@angular/core';
import { MenuEntry } from '../menu.model';

@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss']
})
export class MenuEntryComponent implements OnInit {

  @Input() public entry: MenuEntry;

  constructor() { }

  public ngOnInit(): void { }
}
