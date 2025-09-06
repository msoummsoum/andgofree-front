import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSetting2Component } from './language-setting2.component';

describe('LanguageSetting2Component', () => {
  let component: LanguageSetting2Component;
  let fixture: ComponentFixture<LanguageSetting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSetting2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageSetting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
