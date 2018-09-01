import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthHttp } from '../../../node_modules/angular2-jwt';
import { Categoria } from '../core/model/Categoria';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: AuthHttp) {
    this.categoriasUrl = `${environment.domain}/categorias`
  }

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
