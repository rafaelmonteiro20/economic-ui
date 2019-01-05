import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from '../../core/error-handler.service';
import { UsuarioService, UsuarioFilter } from '../usuario.service';
import { Usuario } from '../../core/model/Usuario';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent implements OnInit {

  usuarios = [];
  filtro = new UsuarioFilter();

  constructor(private usuarioService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de Usuários');
    this.pesquisar();
  }

  pesquisar() {
    this.usuarioService.pesquisar(this.filtro)
      .then(usuarios => this.usuarios = usuarios)
      .catch(erro => this.errorHandler.handle(erro));
  }

  mudarStatus(usuario: Usuario) {
    console.log('Mudar status..');
  }

  confirmarExclusao(usuario: Usuario) {
    console.log('Confirmar exclusão..')
  }

}
