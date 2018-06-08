import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class LancamentoFilter {
  descricao: string;
}

@Injectable()
export class LancamentoService {

  lancamentosUrl = "http://localhost:8081/lancamentos"

  constructor(private http: Http) { }

  pesquisar(filtro: LancamentoFilter): Promise<any> {
    const params = new URLSearchParams();

    if(filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(this.lancamentosUrl, { search: filtro })
               .toPromise()
               .then(response => response.json().content);
  }

}
