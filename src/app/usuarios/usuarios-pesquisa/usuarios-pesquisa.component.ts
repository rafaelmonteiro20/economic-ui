import { Component } from '@angular/core';

import { UsuarioService, UsuarioFilter } from '../usuario.service';

@Component({
  selector: 'app-usuarios-pesquisa',
  templateUrl: './usuarios-pesquisa.component.html',
  styleUrls: ['./usuarios-pesquisa.component.css']
})
export class UsuariosPesquisaComponent {

  usuarios = [];
  filtro = new UsuarioFilter();

  constructor(private usuarioService: UsuarioService) {

  }

  pesquisar() {
    console.log('Chamou..');
  }

  mudarStatus(usuario: Usuario) {
    console.log('Mudar status..');
  }

  confirmarExclusao(usuario: Usuario) {
    console.log('Confirmar exclusão..')
  }

}
