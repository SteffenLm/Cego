import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService) { }

  public ngOnInit(): void { }

  public toggleSidenav(): void {
    this.mainService.clickMenu();
  }
}
