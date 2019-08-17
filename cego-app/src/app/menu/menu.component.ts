import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MainService } from '../main/main.service';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

interface MenuEntry {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  public menuEntries: MenuEntry[] = [
    {
      icon: 'group',
      text: 'Players'
    },
    {
      icon: 'casino',
      text: 'Games'
    },
    {
      icon: 'person',
      text: 'Profil'
    }
  ];

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
