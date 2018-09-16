import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '../../../../node_modules/@angular/platform-browser';

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
  formulario: FormGroup;

  constructor(
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService, 
    private route: ActivatedRoute, 
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.configurarFormulario();
    const lancamentoID = this.route.snapshot.params['id'];
    let titulo = '';

    if(lancamentoID) {
      this.carregarLancamento(lancamentoID);
      titulo = 'Edição de Lançamento'
    } else {
      titulo = 'Novo Lançamento';
    }
    
    this.title.setTitle(titulo);
    this.carregarCategorias();
    this.carregarPessoas();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [],
      tipo: ['RECEITA', Validators.required],
      dataVencimento: [null, Validators.required],
      dataPagamento: [null],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      valor: [null, Validators.required],
      categoria: this.formBuilder.group({
        id: [null, Validators.required],
        nome: []
      }),
      pessoa: this.formBuilder.group({
        id: [null, Validators.required],
        nome: []
      }),
      observacao: []
    });
  }

  carregarLancamento(id: number) {
    this.lancamentoService.buscarPorID(id)
      .then(lancamento => this.formulario.patchValue(lancamento))
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar() {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.adicionarLancamento();
    }
  }
  
  adicionarLancamento() {
    this.lancamentoService.salvar(this.formulario.value)
    .then(() => {
      this.toasty.success('Lançamento salvo com sucesso.');
      this.router.navigate(['/lancamentos']);
    })
    .catch(error => this.errorHandler.handle(error));
  }

  atualizarLancamento() {
    this.lancamentoService.atualizar(this.formulario.value)
      .then(() => {
        this.toasty.success('Lançamento editado com sucesso.');
        this.router.navigate(['/lancamentos']);
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
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas.map(p => {
          return { label: p.nome, value: p.id }
        })
      })
      .catch(error => this.errorHandler.handle(error));
  }

  get editando() {
    return Boolean(this.formulario.get('id').value);
  }

  novo() {
    this.formulario.reset();
    
    setTimeout(function() {
      this.formulario.patchValue({
        tipo: 'RECEITA'
      });
    }.bind(this), 1);

    this.router.navigate(['/lancamentos/form']);
  }

}
