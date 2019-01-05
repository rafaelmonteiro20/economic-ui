import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../core/model/Usuario';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = new Usuario();
  confirmacaoSenha: string;
  
  constructor() {

  }

  ngOnInit() {
  
  }

  salvar(form: NgForm) {
    console.log('Salvando...');
  }

  get editando() {
    return Boolean(this.usuario.id);
  }

}
