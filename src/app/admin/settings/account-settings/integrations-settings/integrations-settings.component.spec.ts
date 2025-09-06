import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsSettingsComponent } from './integrations-settings.component';

describe('IntegrationsSettingsComponent', () => {
  let component: IntegrationsSettingsComponent;
  let fixture: ComponentFixture<IntegrationsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationsSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
