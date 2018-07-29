import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '../../../../node_modules/@angular/platform-browser';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';

import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../../core/model/Pessoa';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nova Pessoa');
  }

  salvar(form: NgForm) {
    this.pessoaService.salvar(this.pessoa)
        .then(() => {
          this.pessoa = new Pessoa();
          form.reset();
          this.toasty.success('Pessoa salva com sucesso.');
        })
        .catch(error => this.errorHandler.handle(error));
  }

}
