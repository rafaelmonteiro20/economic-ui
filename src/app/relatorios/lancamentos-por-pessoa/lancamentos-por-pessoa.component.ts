import { Component } from '@angular/core';

import { RelatoriosService } from '../relatorios.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-lancamentos-por-pessoa',
  templateUrl: './lancamentos-por-pessoa.component.html',
  styleUrls: ['./lancamentos-por-pessoa.component.css']
})
export class LancamentosPorPessoaComponent {

  dataInicio: Date;
  dataFim: Date;

  constructor(
    private relatoriosService: RelatoriosService,
    private errorHandler: ErrorHandlerService) { }

  gerar() {
    this.relatoriosService.lancamentosPorPessoa(this.dataInicio, this.dataFim)
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);
        window.open(url);
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
