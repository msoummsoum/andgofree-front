import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiConfigurationComponent } from './ai-configuration.component';

describe('AiConfigurationComponent', () => {
  let component: AiConfigurationComponent;
  let fixture: ComponentFixture<AiConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
