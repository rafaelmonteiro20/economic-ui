import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  display: boolean = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    return this.categoriaService.pesquisar()
               .then(categorias => this.categorias = categorias);
  }

  confirmarExclusao(categoria: any) {
    console.log('Excluindo...', categoria.id)
  }

  showDialog() {
    this.display = true;
  }

}
