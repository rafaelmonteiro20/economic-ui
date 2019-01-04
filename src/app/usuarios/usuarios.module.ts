import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';

import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosPesquisaComponent } from './usuarios-pesquisa/usuarios-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    InputSwitchModule,

    SharedModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosPesquisaComponent
  ]
})
export class UsuariosModule {

}
