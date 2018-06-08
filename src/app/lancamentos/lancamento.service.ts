import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LancamentoService {

  lancamentosUrl = "http://localhost:8081/lancamentos"

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    return this.http.get(this.lancamentosUrl)
               .toPromise()
               .then(response => response.json().content);
  }

}
