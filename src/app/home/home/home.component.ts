import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { HomeService } from '../home.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pieChartData: any;

  lineChartData = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Receitas',
        data: [4, 10, 18, 5, 1, 20, 3],
        borderColor: '#3366CC'
      }, {
        label: 'Despesas',
        data: [10, 15, 8, 5, 1, 7, 9],
        borderColor: '#D62B00'
      }
    ]
  };

  constructor(
    private homeService: HomeService,
    private errorHandler: ErrorHandlerService, 
    private title: Title) { }

  ngOnInit() {
    this.carregarDadosGraficoPizza();
    this.title.setTitle('Home');
  }

  carregarDadosGraficoPizza() {
    this.homeService.lancamentosPorCategoria()
      .then(dados => {
        this.pieChartData = {
          labels: dados.map(dados => dados.categoria.nome),
          datasets: [{
            data: dados.map(dados => dados.total),
            backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6',
              '#DD4477', '#3366CC', '#DC3912']
          }]
        }
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
