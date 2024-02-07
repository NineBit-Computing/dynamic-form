import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumevsServioceComponent } from './volumevs-servioce.component';

describe('VolumevsServioceComponent', () => {
  let component: VolumevsServioceComponent;
  let fixture: ComponentFixture<VolumevsServioceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolumevsServioceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolumevsServioceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
