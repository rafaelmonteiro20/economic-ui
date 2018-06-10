import { Component, OnInit } from '@angular/core';
import { LancamentoService, LancamentoFilter } from '../lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  totalRegistros = 10;
  filtro = new LancamentoFilter();

  constructor(private lancamentoService: LancamentoService) { };

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
        .then(response => {
          this.lancamentos = response.content;
          this.totalRegistros = response.totalElements;
        });
  }

  paginar(evento: LazyLoadEvent) {
    const pagina = evento.first / evento.rows;
    this.pesquisar(pagina);
  }
  
}
