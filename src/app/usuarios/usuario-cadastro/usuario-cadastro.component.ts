import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../../core/model/Usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = new Usuario();
  confirmacaoSenha: string;
  
  constructor(private usuarioService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de Usuário');
  }

  salvar(form: NgForm) {
    this.usuarioService.salvar(this.usuario)
      .then(() => {
        this.toasty.success('Usuário salvo com sucesso.');
        this.router.navigate(['/usuarios']);
      }).catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.usuario.id);
  }

}
