import { Injectable } from '@angular/core';
import { AuthHttp } from '../../../node_modules/angular2-jwt';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LogoutService {

  urlLogout = "http://localhost:8081/tokens/revoke";

  constructor(
    private http: AuthHttp, 
    private auth: AuthService) { }

  logout() : Promise<any> {
    return this.http.delete(this.urlLogout, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparToken();
    });
  }
}
