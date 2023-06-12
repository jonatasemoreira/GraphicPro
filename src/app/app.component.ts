import { Component, Input, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTitleSubtitle, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*Graphic*/
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "0",
          data: [5, 4, 2, 1, 2, 1],
          color: "#ffc007"
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors:['#000']
        }
      },
      xaxis: {
        categories: [
          ""
        ]
      }
    };
  }

  /*Estrela*/
  @Input()
  rating!: number;
  starsWidth!: number;

  ngOnChanges(): void {
    this.starsWidth = this.rating * 14.8;
  }

  /*Armazenamento de avaliações*/
  show: boolean = false;

  abrirMobile() {
    this.show =! this.show;
  }
  notificacaoFilter = '2'

  outros = {
    total:'15',
    avaliacao: ['1.0','2.0','3.0','4.0','5.0'],
  }

  cadastros = [
    {name: 'João', avaliacao: '0.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
    {name: 'Maria', avaliacao: '1.0', comentario: 'Motivo 1', profissional: 'Natalisson', servico: 'Penteado', unidade: 'SAVASSI'},
    {name: 'Anônimo', avaliacao: '1.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
    {name: 'Carlos', avaliacao: '2.0', comentario: 'Motivo 1', profissional: 'Natalisson', servico: 'Barba', unidade: 'NOVO ELDORADO'},
    {name: 'Alex', avaliacao: '3.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
    {name: 'Cleusa', avaliacao: '3.0', comentario: 'Motivo 1', profissional: 'Natalisson', servico: 'Barba', unidade: 'NOVO ELDORADO'},
    {name: 'Sarah', avaliacao: '4.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
    {name: 'Fran', avaliacao: '4.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
    {name: 'Luana', avaliacao: '4.0', comentario: 'Motivo 1', profissional: 'Natalisson', servico: 'Penteado', unidade: 'SAVASSI'},
    {name: 'Jonatas', avaliacao: '4.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Barba', unidade: 'NOVO ELDORADO'},
    {name: 'Antônio', avaliacao: '5.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Barba', unidade: 'NOVO ELDORADO'},
    {name: 'Gabriel', avaliacao: '5.0', comentario: 'Motivo 1', profissional: 'Natalisson', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
    {name: 'Beti', avaliacao: '5.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Penteado', unidade: 'SAVASSI'},
    {name: 'Sirlei', avaliacao: '5.0', comentario: 'Motivo 1', profissional: 'Natalisson', servico: 'Penteado', unidade: 'SAVASSI'},
    {name: 'Luciano', avaliacao: '5.0', comentario: 'Motivo 1', profissional: 'Cris', servico: 'Corte de cabelo', unidade: 'NOVO ELDORADO'},
  ]

  unidade() {
    this.cadastros.filter
  }






}
