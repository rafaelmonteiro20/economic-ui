import { Injectable } from '@angular/core';
import { AuthHttp } from '../../../node_modules/angular2-jwt';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class LogoutService {

  urlLogout: string;

  constructor(private http: AuthHttp, private auth: AuthService) {
    this.urlLogout = `${environment.domain}/tokens/revoke`;
  }

  logout() : Promise<any> {
    return this.http.delete(this.urlLogout, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparToken();
    });
  }
}
