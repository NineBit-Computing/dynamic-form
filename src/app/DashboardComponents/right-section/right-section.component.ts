import { Component } from '@angular/core';
import { TodaysSalesComponent } from '../todays-sales/todays-sales.component';
import { VisitorInsightsComponent } from '../visitor-insights/visitor-insights.component';
import { TotalRevenueComponent } from '../total-revenue/total-revenue.component';
import { CustomerSatisfactionComponent } from '../customer-satisfaction/customer-satisfaction.component';
import { TargetvsrealityComponent } from '../targetvsreality/targetvsreality.component';
import { TopProductsComponent } from '../top-products/top-products.component';
import { SalesMappingComponent } from '../sales-mapping/sales-mapping.component';
import { VolumevsServioceComponent } from '../volumevs-servioce/volumevs-servioce.component';

@Component({
  selector: 'app-right-section',
  standalone: true,
  imports: [
    TodaysSalesComponent,
    VisitorInsightsComponent,
    TotalRevenueComponent,
    CustomerSatisfactionComponent,
    TargetvsrealityComponent,
    TopProductsComponent,
    SalesMappingComponent,
    VolumevsServioceComponent],
  templateUrl: './right-section.component.html',
  styleUrl: './right-section.component.css'
})
export class RightSectionComponent {

}
