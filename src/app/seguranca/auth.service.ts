import { Injectable } from '@angular/core';
import { Http, Headers } from '../../../node_modules/@angular/http';

import 'rxjs/add/operator/toPromise';
import { JwtHelper } from '../../../node_modules/angular2-jwt';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8081/oauth/token';
  jwtPayload: any;

  constructor(private http: Http, private jwtHelper: JwtHelper) { 
    this.carregarToken();      
  }

  login(usuario:string, senha:string) : Promise<void> {
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFyQDEyMw==');
    
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
        this.armazenarToken(response.json().access_token)
      })
      .catch(response => {
        console.log(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
  
    if(token) {
      this.armazenarToken(token);
    }
  
  }

}
