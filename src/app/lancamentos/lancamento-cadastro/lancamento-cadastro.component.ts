import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../../core/model/Lancamento';
import { LancamentoService } from '../lancamento.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { PessoaService } from '../../pessoas/pessoa.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [];
  pessoas = [];

  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService) { }
 
  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    this.categoriaService.pesquisar()
        .then(categorias => {
          this.categorias = categorias.map(c => {
            return { label: c.nome, value: c.id }
          })
        })
        .catch(error => this.errorHandler.handle(error));
  }

  carregarPessoas() {
    this.pessoaService.pesquisar()
        .then(pessoas => {
          this.pessoas = pessoas.map(p => {
            return { label: p.nome, value: p.id }
          })
        })
        .catch(error => this.errorHandler.handle(error));
  }

}
