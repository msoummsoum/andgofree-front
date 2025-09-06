import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaturesSettingComponent } from './signatures-setting.component';

describe('SignaturesSettingComponent', () => {
  let component: SignaturesSettingComponent;
  let fixture: ComponentFixture<SignaturesSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaturesSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaturesSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
