import { Component } from '@angular/core';
import { LeftSectionComponent } from '../DashboardComponents/left-section/left-section.component';
import { RightSectionComponent } from '../DashboardComponents/right-section/right-section.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [LeftSectionComponent,RightSectionComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
