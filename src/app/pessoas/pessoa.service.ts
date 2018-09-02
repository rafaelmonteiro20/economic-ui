import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from '../../../node_modules/angular2-jwt';
import { environment } from '../../environments/environment';

import { Pessoa } from './../core/model/Pessoa';
import 'rxjs/add/operator/toPromise';

export class PessoaFilter {
  nome: string;
}

@Injectable()
export class PessoaService {

  urlPessoas: string;

  constructor(private http: AuthHttp) {
    this.urlPessoas = `${environment.domain}/pessoas`
  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post(this.urlPessoas, JSON.stringify(pessoa))
      .toPromise()
      .then(response => response.json());
  }

  pesquisar(filtro: PessoaFilter): Promise<any> {
    const params = new URLSearchParams();
    
    if(filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(this.urlPessoas, { search: params })
      .toPromise()
      .then(response => response.json());
  }

  listarTodas() {
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
