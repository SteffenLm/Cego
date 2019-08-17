import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerLogin } from './login.model';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.min(3), Validators.max(30)]],
        password: ['', [Validators.required, Validators.min(3)]]
      }
    );

  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginService.requestToken(this.loginForm.value);
  }
}
