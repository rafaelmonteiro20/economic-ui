import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {
  
  pessoas = [];

  constructor(private pessoaService: PessoaService, 
    private confirmation: ConfirmationService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService) {

  }
    
  ngOnInit() {
     this.pesquisar();
  }

  pesquisar() {
    this.pessoaService.pesquisar()
        .then(pessoas => this.pessoas = pessoas);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Deseja excluir a pessoa selecionada?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.id)
        .then(() => {
          this.pesquisar();
          this.toasty.success('Pessoa excluída com sucesso.');
        });
  }

  mudarStatus(pessoa: any) {
    const status = !pessoa.ativo;

    this.pessoaService.mudarStatus(pessoa.id)
        .then(() => {
          const acao = status ? 'ativada' : 'desativada';
          pessoa.ativo = status;
          this.toasty.success(`Pessoa ${acao} com sucesso.`);
        })
        .catch((error => this.errorHandler.handle(error)));
  }

}
