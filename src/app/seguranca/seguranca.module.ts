import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '../../../node_modules/@angular/http';

import { AuthHttp, AuthConfig } from '../../../node_modules/angular2-jwt';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { LoginComponent } from './login/login.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  const config = new AuthConfig({
      globalHeaders: [
        { 'Content-Type':'application/json' }
      ]
  });
  
  return new AuthHttp(config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class SegurancaModule { }
