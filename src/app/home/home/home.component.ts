import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DecimalPipe } from '@angular/common';

import { HomeService } from '../home.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pieChartData: any;
  lineChartData: any;

  options = {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const valor = dataset.data[tooltipItem.index];
          const label = dataset.label ? (dataset.label + ': ') : '';

          return label + this.decimalPipe.transform(valor, '1.2-2');
        }
      }
    }
  };

  constructor(
    private homeService: HomeService,
    private decimalPipe: DecimalPipe,
    private errorHandler: ErrorHandlerService, 
    private title: Title) { }

  ngOnInit() {
    this.carregarDadosGraficoPizza();
    this.carregarDadosGraficoLinha();
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

  carregarDadosGraficoLinha() {
    this.homeService.lancamentosPorDia()
      .then(dados => {
        const diasDoMes = this.diasDoMes();
        this.lineChartData = {
          labels: diasDoMes,
          datasets: [{
            label: 'Receitas',
            borderColor: '#3366CC',
            data: this.totaisPorTipo('RECEITA', dados, diasDoMes)
          },
          {
            label: 'Despesas',
            borderColor: '#D62B00',
            data: this.totaisPorTipo('DESPESA', dados, diasDoMes)
          }]
        }
      })
      .catch(error => this.errorHandler.handle(error));
  }

  private totaisPorTipo(tipo: string, dados: Array<any>, diasDoMes: number[]) {
    const dadosPorTipo = dados.filter(dado => dado.tipo === tipo)
    return this.totaisPorDia(dadosPorTipo, diasDoMes);
  }

  private totaisPorDia(dados, diasDoMes) {
    const totais: number[] = [];
    for(let dia of diasDoMes) {
      let total = 0;
      
      for(let dado of dados) {
        if(dado.data.getDate() === dia) {
          total = dado.valor;
          break;
        }
      }
      totais.push(total);
    }
    return totais;
  }

  private diasDoMes() {
    const mesReferencia = new Date();
    mesReferencia.setMonth(mesReferencia.getMonth() + 1);
    mesReferencia.setDate(0);
    
    const quantidadeDias = mesReferencia.getDate();
    const dias: number[] = [];
    
    for(let dia = 1; dia <= quantidadeDias; dia++) {
      dias.push(dia);
    }

    return dias;
  }

}
