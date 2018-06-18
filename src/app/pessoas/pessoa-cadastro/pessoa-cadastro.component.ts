import { Component } from '@angular/core';
import { Pessoa } from '../../core/model/Pessoa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

  pessoa = new Pessoa();

  salvar(form: NgForm) {
    console.log('Salvando..');
    console.log(this.pessoa);
  }

}
