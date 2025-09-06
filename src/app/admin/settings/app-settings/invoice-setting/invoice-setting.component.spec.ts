import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSettingComponent } from './invoice-setting.component';

describe('InvoiceSettingComponent', () => {
  let component: InvoiceSettingComponent;
  let fixture: ComponentFixture<InvoiceSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
