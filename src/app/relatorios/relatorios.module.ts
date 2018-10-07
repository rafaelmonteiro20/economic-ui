import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { SharedModule } from '../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { LancamentosPorPessoaComponent } from './lancamentos-por-pessoa/lancamentos-por-pessoa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    CalendarModule,

    RelatoriosRoutingModule,
    SharedModule
  ],
  declarations: [
    LancamentosPorPessoaComponent
  ]
})
export class RelatoriosModule { }
