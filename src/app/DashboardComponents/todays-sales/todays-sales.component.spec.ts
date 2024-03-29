import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysSalesComponent } from './todays-sales.component';

describe('TodaysSalesComponent', () => {
  let component: TodaysSalesComponent;
  let fixture: ComponentFixture<TodaysSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
