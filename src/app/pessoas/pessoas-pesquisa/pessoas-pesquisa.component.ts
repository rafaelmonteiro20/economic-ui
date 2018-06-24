import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {
  
  pessoas = [];

  constructor(private pessoaService: PessoaService) {

  }
    
  ngOnInit() {
     this.pesquisar();
  }

  pesquisar() {
    this.pessoaService.pesquisar()
        .then(pessoas => this.pessoas = pessoas);
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.id)
        .then(() => {
          this.pesquisar();
        });
  }

}
