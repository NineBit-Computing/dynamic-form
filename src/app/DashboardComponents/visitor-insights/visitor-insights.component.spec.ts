import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorInsightsComponent } from './visitor-insights.component';

describe('VisitorInsightsComponent', () => {
  let component: VisitorInsightsComponent;
  let fixture: ComponentFixture<VisitorInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorInsightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitorInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
