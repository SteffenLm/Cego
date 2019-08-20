import { Component, OnInit, Input } from '@angular/core';
import { MenuEntry } from '../menu.model';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.scss']
})
export class MenuEntryComponent implements OnInit {

  @Input() public entry: MenuEntry;

  constructor(private mainService: MainService) { }

  public ngOnInit(): void { }

  public toggleSidenav(): void {
    this.mainService.clickMenu();
  }
}
