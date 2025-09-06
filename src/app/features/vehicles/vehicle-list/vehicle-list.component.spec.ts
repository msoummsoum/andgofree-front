import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vehicleListComponent } from './vehicle-list.component';

describe('vehicleListComponent', () => {
  let component: vehicleListComponent;
  let fixture: ComponentFixture<vehicleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vehicleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
