import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vehicleMapComponent } from './vehicle-map.component';

describe('vehicleMapComponent', () => {
  let component: vehicleMapComponent;
  let fixture: ComponentFixture<vehicleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vehicleMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vehicleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
