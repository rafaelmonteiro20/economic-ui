import { Component, OnInit } from '@angular/core';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-pagina-acesso-negado',
  templateUrl: './pagina-acesso-negado.component.html',
  styleUrls: ['./pagina-acesso-negado.component.css']
})
export class PaginaAcessoNegadoComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Acesso negado');
  }

}
