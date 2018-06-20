import { Component } from '@angular/core';
import { Pessoa } from '../../core/model/Pessoa';
import { NgForm } from '@angular/forms';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService) {

  }

  salvar(form: NgForm) {
    this.pessoaService.salvar(this.pessoa)
        .then(() => {
          this.pessoa = new Pessoa();
        });
  }

}
