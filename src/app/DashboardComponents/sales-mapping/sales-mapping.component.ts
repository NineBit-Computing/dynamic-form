import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-sales-mapping',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './sales-mapping.component.html',
  styleUrl: './sales-mapping.component.css'
})
export class SalesMappingComponent {

}
