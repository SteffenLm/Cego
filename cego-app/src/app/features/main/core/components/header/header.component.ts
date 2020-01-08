import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from '../../../../../core/services/login.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private mainService: MainService, private loginService: LoginService) { }

  public ngOnInit(): void { }

  public toggleSidenav(): void {
    this.mainService.clickMenu();
  }

  public onLogout(): void {
    this.loginService.logout();
  }
}
