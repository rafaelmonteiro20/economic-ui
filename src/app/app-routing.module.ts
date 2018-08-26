import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { CategoriasComponent } from './categorias/categorias.component';

import { AuthGuard } from './seguranca/auth.guard';
import { LoginComponent } from './seguranca/login/login.component';
import { PaginaAcessoNegadoComponent } from './core/pagina-acesso-negado/pagina-acesso-negado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/lancamentos', 
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_PESQUISAR_LANCAMENTO']
    }
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'pessoas', 
    component: PessoasPesquisaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_PESQUISAR_PESSOA']
    }
  },
  { 
    path: 'pessoas/form', 
    component: PessoaCadastroComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CADASTRAR_PESSOA']
    }
  },
  { 
    path: 'pessoas/:id', 
    component: PessoaCadastroComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CADASTRAR_PESSOA']
    }
  },
  { 
    path: 'lancamentos', 
    component: LancamentosPesquisaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_PESQUISAR_LANCAMENTO']
    }
  },
  { 
    path: 'lancamentos/form', 
    component: LancamentoCadastroComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CADASTRAR_LANCAMENTO']
    }
  },
  { 
    path: 'lancamentos/:id', 
    component: LancamentoCadastroComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CADASTRAR_LANCAMENTO']
    }
  },
  { 
    path: 'categorias', 
    component: CategoriasComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_PESQUISAR_CATEGORIA']
    }
  },
  { 
    path: 'acesso-negado', 
    component: PaginaAcessoNegadoComponent 
  },
  { 
    path: 'pagina-nao-encontrada', 
    component: PaginaNaoEncontradaComponent 
  },
  { 
    path: '**', 
    redirectTo: '/pagina-nao-encontrada' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
