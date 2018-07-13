import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Categoria } from '../core/model/Categoria';
import { stringify } from 'querystring';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8081/categorias';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    return this.http.get(this.categoriasUrl)
              .toPromise()
              .then(response => response.json());
  }

  salvar(categoria: Categoria): Promise<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this.categoriasUrl, JSON.stringify(categoria), { headers })
              .toPromise()
              .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.categoriasUrl}/${id}`)
              .toPromise()
              .then(() => null);
  }

}
