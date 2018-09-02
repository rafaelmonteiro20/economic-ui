import { Component } from '@angular/core';
import { AuthService } from '../../seguranca/auth.service';
import { LogoutService } from '../../seguranca/logout.service';
import { Router } from '../../../../node_modules/@angular/router';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
