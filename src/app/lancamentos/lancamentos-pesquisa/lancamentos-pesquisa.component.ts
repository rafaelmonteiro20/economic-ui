import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoService, LancamentoFilter } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty';
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
    private errorHandler: ErrorHandlerService) { };

  ngOnInit() {
    
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
