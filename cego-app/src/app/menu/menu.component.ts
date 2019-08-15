import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MainService } from '../main/main.service';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  public mainHeight = 512;
  public toggle = false;
  @ViewChild('sidenav', { static: true }) private sideNavRef: MatSidenav;

  private menuSubscription: Subscription;

  constructor(private mainService: MainService) { }

  public ngOnInit(): void {
    this.menuSubscription = this.mainService.menuClicked$.subscribe(
      () => { this.sideNavRef.toggle(); }
    );
    this.mainHeight = window.innerHeight - 56;
  }

  public ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
  }
}
