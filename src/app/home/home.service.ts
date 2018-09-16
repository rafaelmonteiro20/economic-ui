import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

  lancamentosUrl: string;

  constructor(private http: AuthHttp) {
    this.lancamentosUrl = `${environment.domain}/lancamentos`;
  }

  lancamentosPorCategoria(): Promise<Array<any>> {
    return this.http.get(`${this.lancamentosUrl}/estatisticas/por-categoria`)
      .toPromise()
      .then(response => response.json());
  }

  lancamentosPorDia(): Promise<Array<any>> {
    return this.http.get(`${this.lancamentosUrl}/estatisticas/por-dia`)
      .toPromise()
      .then(response => {
        const dados = response.json();
        this.converterStringParaData(dados);
        return dados;
      });
  }

  private converterStringParaData(dados: Array<any>) {
    for(const dado of dados) {
      dado.data = moment(dado.data, 'YYYY-MM-DD').toDate();
    }
  }

}
