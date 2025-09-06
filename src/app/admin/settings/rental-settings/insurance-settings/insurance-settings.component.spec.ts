import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceSettingsComponent } from './insurance-settings.component';

describe('InsuranceSettingsComponent', () => {
  let component: InsuranceSettingsComponent;
  let fixture: ComponentFixture<InsuranceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
