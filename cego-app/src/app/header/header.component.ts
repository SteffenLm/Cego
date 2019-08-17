import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService, private loginService: LoginServiceService) { }

  public ngOnInit(): void { }

  public toggleSidenav(): void {
    this.mainService.clickMenu();
  }

  public onLogout(): void {
     this.loginService.logout();
  }
}
