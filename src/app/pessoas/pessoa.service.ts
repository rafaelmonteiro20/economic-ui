import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

  urlPessoas = 'http://localhost:8081/pessoas';

  constructor(private http: Http) { 

  }

  pesquisar(): Promise<any> {
    return this.http.get(this.urlPessoas)
               .toPromise()
               .then(response => response.json());
  }

}
