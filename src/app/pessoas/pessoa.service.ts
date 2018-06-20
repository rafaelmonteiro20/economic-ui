import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pessoa } from './../core/model/Pessoa';

@Injectable()
export class PessoaService {

  urlPessoas = 'http://localhost:8081/pessoas';

  constructor(private http: Http) { 

  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.urlPessoas, JSON.stringify(pessoa), { headers })
              .toPromise()
              .then(response => response.json());
  }

  pesquisar(): Promise<any> {
    return this.http.get(this.urlPessoas)
              .toPromise()
              .then(response => response.json());
  }

}
