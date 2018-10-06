import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { LancamentosPorPessoaComponent } from './lancamentos-por-pessoa/lancamentos-por-pessoa.component';

@NgModule({
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule
  ],
  declarations: [
    LancamentosPorPessoaComponent
  ]
})
export class RelatoriosModule { }
