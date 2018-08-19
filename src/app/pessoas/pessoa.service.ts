import { Injectable } from '@angular/core';
import { AuthHttp } from '../../../node_modules/angular2-jwt';

import { Pessoa } from './../core/model/Pessoa';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

  urlPessoas = 'http://localhost:8081/pessoas';

  constructor(private http: AuthHttp) { }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post(this.urlPessoas, JSON.stringify(pessoa))
      .toPromise()
      .then(response => response.json());
  }

  pesquisar(): Promise<any> {
    return this.http.get(this.urlPessoas)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.urlPessoas}/${id}`)
      .toPromise()
      .then(() => null);
  }

  mudarStatus(id: number): Promise<void> {
    return this.http.put(`${this.urlPessoas}/${id}/mudar-status`, '', { })
      .toPromise()
      .then(() => null);
  }

  buscarPorID(id: number): Promise<any> {
    return this.http.get(`${this.urlPessoas}/${id}`)
      .toPromise()
      .then(response => response.json() as Pessoa);
  }

}
