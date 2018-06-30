import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputSwitchModule } from 'primeng/components/inputswitch/inputswitch';

import { SharedModule } from '../shared/shared.module';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,
    InputSwitchModule,

    SharedModule
  ],
  declarations: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
  ]
})
export class PessoasModule { }
