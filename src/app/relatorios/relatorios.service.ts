import { Injectable } from '@angular/core';
import { URLSearchParams, ResponseContentType } from '@angular/http';

import { AuthHttp } from '../../../node_modules/angular2-jwt';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RelatoriosService {

  lancamentosUrl: string;

  constructor(private http: AuthHttp) {
    this.lancamentosUrl = `${environment.domain}/lancamentos`
  }

  lancamentosPorPessoa(dataInicio: Date, dataFim: Date): Promise<any> {
    const params = new URLSearchParams();
    const formato = 'YYYY-MM-DD';

    params.set('dataInicio', moment(dataInicio).format(formato));
    params.set('dataFim', moment(dataFim).format(formato));
    
    return this.http.get(`${this.lancamentosUrl}/relatorio/por-pessoa`, 
      { search: params, responseType: ResponseContentType.Blob })
      .toPromise()
      .then(response => response.blob());
  }

}
