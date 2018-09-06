import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { CategoriasComponent } from './categorias.component';

const routes: Routes = [
    { 
        path: '', 
        component: CategoriasComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_PESQUISAR_CATEGORIA']}
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CategoriasRoutingModule {

}
