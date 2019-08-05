import { Injectable } from '@angular/core';
import { ServerLogin } from './login.model';
import { Api } from '../core/api.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends Api {

  constructor(http: HttpClient) {
    super(http);
   }

  public requestToken(credentials: ServerLogin): void {
    this.postRequest<ServerLogin>('/auth', credentials).subscribe(
      ()=>{

      },
      ()=>{
        
      }
    );
  }
}
