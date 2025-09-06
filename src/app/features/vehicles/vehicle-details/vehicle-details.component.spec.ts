import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vehicleDetailsComponent } from './vehicle-details.component';

describe('vehicleDetailsComponent', () => {
  let component: vehicleDetailsComponent;
  let fixture: ComponentFixture<vehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vehicleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
