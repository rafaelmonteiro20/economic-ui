import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { AuthService } from '../seguranca/auth.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { CategoriaService } from '../categorias/categoria.service';
import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaAcessoNegadoComponent } from './pagina-acesso-negado/pagina-acesso-negado.component';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent,
    PaginaAcessoNegadoComponent,
    PaginaNaoEncontradaComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    AuthService,
    LancamentoService,
    PessoaService,
    CategoriaService,
    ConfirmationService,
    ErrorHandlerService,
    JwtHelper,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
