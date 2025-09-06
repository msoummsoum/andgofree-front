import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSettingComponent } from './login-setting.component';

describe('LoginSettingComponent', () => {
  let component: LoginSettingComponent;
  let fixture: ComponentFixture<LoginSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
