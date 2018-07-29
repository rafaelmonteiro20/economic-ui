import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '../../../../node_modules/@angular/platform-browser';

import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ToastyService } from 'ng2-toasty';

import { LancamentoService, LancamentoFilter } from '../lancamento.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  totalRegistros = 10;
  filtro = new LancamentoFilter();

  @ViewChild('tabela') tabela;

  constructor(
    private lancamentoService: LancamentoService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private title: Title) { };

  ngOnInit() {
    this.title.setTitle('Pesquisa de Lançamentos');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
        .then(response => {
          this.lancamentos = response.content;
          this.totalRegistros = response.totalElements;
        })
        .catch(error => this.errorHandler.handle(error));
  }

  paginar(evento: LazyLoadEvent) {
    const pagina = evento.first / evento.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir o lançamento selecionado?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any) {
    this.lancamentoService.excluir(lancamento.id)
        .then(() => {
         
          if(this.tabela.first === 0) {
            this.pesquisar();
          } else {
            this.tabela.first = 0;
          }

          this.toasty.success('Lançamento excluído com sucesso.');
        })
        .catch(error => this.errorHandler.handle(error));
  }
  
}
