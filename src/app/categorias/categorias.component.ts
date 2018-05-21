import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() : Promise<any> {
    return this.http.get(`http://localhost:8081/categorias`)
               .toPromise()
               .then(response => {
                  this.categorias = response.json()
               })
  }

}
