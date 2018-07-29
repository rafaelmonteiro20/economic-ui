import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '../../../node_modules/@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { CategoriaService } from './categoria.service';
import { Categoria } from '../core/model/Categoria';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  categoria = new Categoria();

  display: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService, 
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Categorias');
    this.pesquisar();
  }

  pesquisar() {
    return this.categoriaService.pesquisar()
               .then(categorias => this.categorias = categorias);
  }

  salvar(form: NgForm) {
    this.categoriaService.salvar(this.categoria)
        .then(() => {
          this.categoria = new Categoria();
          form.reset();
          this.display = false;
          this.pesquisar();
          this.toasty.success('Categoria salva com sucesso.');
        })
        .catch(error => this.errorHandler.handle(error));
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

  showDialog(form: NgForm) {
    this.display = true;
    this.categoria = new Categoria();
    form.reset();
  }

  hideDialog() {
    this.display = false;
  }

}
