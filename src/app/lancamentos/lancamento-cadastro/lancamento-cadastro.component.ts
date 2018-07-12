import { Component, OnInit } from '@angular/core';
import { Lancamento } from '../../core/model/Lancamento';
import { LancamentoService } from '../lancamento.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { PessoaService } from '../../pessoas/pessoa.service';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

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
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService) { }
 
  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: NgForm) {
    this.lancamentoService.salvar(this.lancamento)
        .then(() => {
          this.lancamento = new Lancamento();
          form.reset();
          this.toasty.success('Lançamento salvo com sucesso.');
        })
        .catch(error => this.errorHandler.handle(error));
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
