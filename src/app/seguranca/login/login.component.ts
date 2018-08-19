import { Component, OnInit } from '@angular/core';
import { Title } from '../../../../node_modules/@angular/platform-browser';
import { Router } from '../../../../node_modules/@angular/router';

import { AuthService } from '../auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private title: Title,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.title.setTitle('Login');
  }

  logar(email: string, senha: string) {
    this.auth.login(email, senha)
      .then(() => this.router.navigate(['/lancamentos']))
      .catch(error => this.errorHandler.handle(error));
  }

}
