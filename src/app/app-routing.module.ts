import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAcessoNegadoComponent } from './core/pagina-acesso-negado/pagina-acesso-negado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: 'app/lancamentos/lancamentos.module#LancamentosModule' },
  { path: 'pessoas', loadChildren: 'app/pessoas/pessoas.module#PessoasModule' },
  { path: 'categorias', loadChildren: 'app/categorias/categorias.module#CategoriasModule' },
  { path: 'relatorios', loadChildren: 'app/relatorios/relatorios.module#RelatoriosModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'acesso-negado', component: PaginaAcessoNegadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
