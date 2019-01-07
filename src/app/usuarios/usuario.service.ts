import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

import { Usuario } from '../core/model/Usuario';
import { Permissao } from '../core/model/Permissao';

import 'rxjs/add/operator/toPromise';

export class UsuarioFilter {
  nome: string
}

@Injectable()
export class UsuarioService {

  urlUsuarios: string;

  constructor(private http: AuthHttp) {
    this.urlUsuarios = `${environment.domain}/usuarios`
  }

  pesquisar(filtro: UsuarioFilter) {
    const params = new URLSearchParams();

    if(filtro.nome) {
      params.set('nome', filtro.nome);
    }
    
    return this.http.get(this.urlUsuarios, { search: params })
      .toPromise()
      .then(response => response.json());
  }

  salvar(usuario: Usuario): Promise<Usuario> {
    return this.http.post(this.urlUsuarios, JSON.stringify(usuario))
      .toPromise()
      .then(response => response.json());
  }

  buscarPermissoes(id: number): Promise<any> {
    return this.http.get(`${this.urlUsuarios}/${id}/permissoes`)
      .toPromise()
      .then(response => response.json());
  }

}
