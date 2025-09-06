import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalSettingsComponent } from './rental-settings.component';

describe('RentalSettingsComponent', () => {
  let component: RentalSettingsComponent;
  let fixture: ComponentFixture<RentalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
