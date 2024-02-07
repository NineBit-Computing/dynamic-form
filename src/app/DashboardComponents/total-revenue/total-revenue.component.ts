import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-total-revenue',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './total-revenue.component.html',
  styleUrl: './total-revenue.component.css'
})
export class TotalRevenueComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart:{
      type: 'line'
    },
    xAxis: {
      categories:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fridya', 'Saturday', 'Sunday'],
  },
    yAxis: {
      title: {
          text: ''
      },
      
  },
    title: {
      text: 'Total Revenue',
      align:'left'
  },
  plotOptions: {
    column: {
        pointPadding: 0,
        borderWidth: 0
    }
},

  series: [
    {
        name: 'Corn',
        data: [406292, 260000, 107000, 68300, 27500, 14500],
        type: "column"
    },
    {
        name: 'Wheat',
        data: [51086, 136000, 5500, 141000, 107180, 77000],
        type: "column"
    }
]
  };
}
