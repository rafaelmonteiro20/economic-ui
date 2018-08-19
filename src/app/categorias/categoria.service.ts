import { Injectable } from '@angular/core';

import { AuthHttp } from '../../../node_modules/angular2-jwt';
import { Categoria } from '../core/model/Categoria';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8081/categorias';

  constructor(private http: AuthHttp) { }

  pesquisar(): Promise<any> {
    return this.http.get(this.categoriasUrl)
      .toPromise()
      .then(response => response.json());
  }

  salvar(categoria: Categoria): Promise<any> {
    return this.http.post(this.categoriasUrl, JSON.stringify(categoria))
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.categoriasUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

}
