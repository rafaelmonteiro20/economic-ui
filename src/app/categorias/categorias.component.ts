import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CategoriaService } from './categoria.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  display: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    return this.categoriaService.pesquisar()
               .then(categorias => this.categorias = categorias);
  }

  confirmarExclusao(categoria: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir a categoria selecionada?',
      accept: () => {
        this.excluir(categoria);
      }
    });
  }

  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.id)
        .then(() => {
          this.pesquisar();
          this.toasty.success('Categoria excluída com sucesso.')
        })
        .catch(error => this.errorHandler.handle(error));
  }

  showDialog() {
    this.display = true;
  }

}
