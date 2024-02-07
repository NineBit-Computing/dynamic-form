import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetvsrealityComponent } from './targetvsreality.component';

describe('TargetvsrealityComponent', () => {
  let component: TargetvsrealityComponent;
  let fixture: ComponentFixture<TargetvsrealityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetvsrealityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetvsrealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
