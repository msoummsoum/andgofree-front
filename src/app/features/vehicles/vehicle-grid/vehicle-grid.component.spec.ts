import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vehicleGridComponent } from './vehicle-grid.component';

describe('vehicleGridComponent', () => {
  let component: vehicleGridComponent;
  let fixture: ComponentFixture<vehicleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vehicleGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vehicleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
