import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

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
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService, 
    private route: ActivatedRoute) { }
 
  ngOnInit() {
    const lancamentoID = this.route.snapshot.params['id'];

    if(lancamentoID) {
      this.carregarLancamento(lancamentoID);
    }
    
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarLancamento(id: number) {
    this.lancamentoService.buscarPorID(id)
        .then(lancamento => {
            this.lancamento = lancamento;
        })
        .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.adicionarLancamento(form);
    }
  }

  adicionarLancamento(form: NgForm) {
    this.lancamentoService.salvar(this.lancamento)
      .then(() => {
        this.lancamento = new Lancamento();
        form.reset();
        this.toasty.success('Lançamento salvo com sucesso.');
      })
      .catch(error => this.errorHandler.handle(error));
  }

  atualizarLancamento() {
    this.lancamentoService.atualizar(this.lancamento)
      .then(lancamento => {
        this.lancamento = lancamento;
        this.toasty.success('Lançamento atualizado com sucesso.');
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

  get editando() {
    return Boolean(this.lancamento.id);
  }

}
