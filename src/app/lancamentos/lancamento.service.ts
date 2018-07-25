import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { Lancamento } from '../core/model/Lancamento';

export class LancamentoFilter {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = "http://localhost:8081/lancamentos"

  constructor(private http: Http) { }

  salvar(lancamento: Lancamento): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.lancamentosUrl, JSON.stringify(lancamento), { headers } )
            .toPromise()
            .then(response => response.json());
  }

  pesquisar(filtro: LancamentoFilter): Promise<any> {
    const params = new URLSearchParams();
    const formato = 'YYYY-MM-DD';

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if(filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoDe) {
      params.set('dataVencimentoDe', moment(filtro.dataVencimentoDe).format(formato));
    }

    if(filtro.dataVencimentoAte) {
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoAte).format(formato));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { search: params })
               .toPromise()
               .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.lancamentosUrl}/${id}`)
              .toPromise()
              .then(() => null);
  }

  buscarPorID(id: number): Promise<any> {
    return this.http.get(`${this.lancamentosUrl}/${id}`)
            .toPromise()
            .then(response => {
              const lancamento = response.json() as Lancamento; 
              this.converterStringsParaDatas(lancamento);
              return lancamento;
            });
  }

  private converterStringsParaDatas(lancamento: Lancamento) {
    lancamento.dataVencimento = moment(lancamento.dataVencimento, 'YYYY-MM-DD').toDate();
    
    if (lancamento.dataPagamento) {
      lancamento.dataPagamento = moment(lancamento.dataPagamento, 'YYYY-MM-DD').toDate();
    }
  }
}
