import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMappingComponent } from './sales-mapping.component';

describe('SalesMappingComponent', () => {
  let component: SalesMappingComponent;
  let fixture: ComponentFixture<SalesMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesMappingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
