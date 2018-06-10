import { Component, OnInit } from '@angular/core';
import { LancamentoService, LancamentoFilter } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;

  constructor(private lancamentoService: LancamentoService) { };

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    const filtro: LancamentoFilter = {
      descricao: this.descricao,
      dataVencimentoDe: this.dataVencimentoDe,
      dataVencimentoAte: this.dataVencimentoAte
    }

    this.lancamentoService.pesquisar(filtro)
        .then(lancamentos => this.lancamentos = lancamentos);
  }
  
}
