import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vehiclesComponent } from './vehicles.component';

describe('vehiclesComponent', () => {
  let component: vehiclesComponent;
  let fixture: ComponentFixture<vehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vehiclesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
