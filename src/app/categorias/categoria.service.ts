import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl = 'http://localhost:8081/categorias';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    return this.http.get(this.categoriasUrl)
              .toPromise()
              .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.categoriasUrl}/${id}`)
              .toPromise()
              .then(() => null);
  }

}
