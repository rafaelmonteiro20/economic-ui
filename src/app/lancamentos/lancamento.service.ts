import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export interface LancamentoFilter {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = "http://localhost:8081/lancamentos"

  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFilter): Promise<any> {
    const params = new URLSearchParams();
    const formato = 'YYYY-MM-DD';

    if(filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoDe) {
      params.set('dataVencimentoDe', moment(filtro.dataVencimentoDe).format(formato));
    }

    if(filtro.dataVencimentoAte) {
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoAte).format(formato));
    }

    return this.http.get(this.lancamentosUrl, { search: params })
               .toPromise()
               .then(response => response.json().content);
  }

}
