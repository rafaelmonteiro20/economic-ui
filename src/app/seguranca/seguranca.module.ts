import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '../../../node_modules/@angular/http';

import { AuthHttp, AuthConfig } from '../../../node_modules/angular2-jwt';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { EconomicHttp } from './economic-http';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { SegurancaRoutingModule } from './seguranca-routing.module';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
      globalHeaders: [
        { 'Content-Type':'application/json' }
      ]
  });
  
  return new EconomicHttp(auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    SegurancaRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [AuthService, Http, RequestOptions]
    },
    AuthGuard,
    LogoutService
  ]
})
export class SegurancaModule {
  
}
