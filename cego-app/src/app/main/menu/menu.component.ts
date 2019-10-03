import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { MainService } from '../main.service';
import { MenuEntry } from './menu.model';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  public headerHeight = 56;
  public contentHeight = 400;
  public load = false;

  public menuEntries: MenuEntry[] = [
    {
      icon: 'group',
      text: 'Players',
      link: '/players'
    },
    {
      icon: 'casino',
      text: 'Games',
      link: '/games'
    },
    {
      icon: 'person',
      text: 'Profil',
      link: '/profile'
    }
  ];
  @ViewChild('sidenav', { static: true }) private sideNavRef: MatSidenav;

  private menuSubscription: Subscription;

  constructor(private mainService: MainService, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(min-width: 600px)'])
      .subscribe(result => {
        if (result.matches) {
          this.headerHeight = 64;
        } else {
          this.headerHeight = 56;
        }
        this.contentHeight = window.innerHeight - this.headerHeight;
      });
  }

  public ngOnInit(): void {
    this.menuSubscription = this.mainService.menuClicked$.subscribe(
      () => { this.sideNavRef.toggle(); }
    );
    this.mainService.loadingIndicator$.subscribe(load => this.load = load);
  }

  public ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
  }
}
