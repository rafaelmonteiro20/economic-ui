import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { CategoriasModule } from './categorias/categorias.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';

import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/form', component: PessoaCadastroComponent },
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/form', component: LancamentoCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    CoreModule,
    CategoriasModule,
    LancamentosModule,
    PessoasModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
