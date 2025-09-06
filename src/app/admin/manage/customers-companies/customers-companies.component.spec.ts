import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCompaniesComponent } from './customers-companies.component';

describe('CustomersCompaniesComponent', () => {
  let component: CustomersCompaniesComponent;
  let fixture: ComponentFixture<CustomersCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersCompaniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
