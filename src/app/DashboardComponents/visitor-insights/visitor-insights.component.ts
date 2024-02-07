import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-visitor-insights',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule, HttpClientModule],
  templateUrl: './visitor-insights.component.html',
  styleUrl: './visitor-insights.component.css',
})
export class VisitorInsightsComponent implements OnInit {
  httpClient = inject(HttpClient);
  updateFlag = false;

  result: any = {
    xAxis: [],
    yAxis: [],
  };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://192.168.1.5:9000/chart/visitor-insight/monthly')
      .subscribe((data: any) => {
        this.result = data;
        console.log(this.result);

        const seriesOptions = this.result.yAxis.map((yAxis: any) => ({
          data: yAxis.data,
          name: yAxis.id,
          type: 'line',
        }));

        this.chartOptions = {
          yAxis: {
            title: {
              text: '',
            },
          },
          title: {
            text: 'Visitor Insights',
            align: 'left',
          },
          xAxis: {
            categories: this.result['xAxis'],
          },
          series: seriesOptions,
        };
      });
  }

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    title: {
      text: 'Visitor Insights',
      align: 'left',
    },
    series: [],
  };
}
