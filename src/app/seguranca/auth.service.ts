import { Injectable } from '@angular/core';
import { Http, Headers } from '../../../node_modules/@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { JwtHelper } from '../../../node_modules/angular2-jwt';

@Injectable()
export class AuthService {

  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(private http: Http, private jwtHelper: JwtHelper) { 
    this.oauthTokenUrl = `${environment.domain}/oauth/token`;
    this.carregarToken();
  }

  login(usuario:string, senha:string) : Promise<void> {
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFyQDEyMw==');
    
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token)
      })
      .catch(response => {
        if(response.status === 400) {
          const responseJson = response.json();
          
          if(responseJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }
        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFyQDEyMw==');
    
    const body = 'grant_type=refresh_token';
    
    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token)
        return Promise.resolve(null);
      })
      .catch(response => {
        console.log('Erro ao renovar o token', response)
      return Promise.resolve(null);
    });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (let role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  limparToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
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
