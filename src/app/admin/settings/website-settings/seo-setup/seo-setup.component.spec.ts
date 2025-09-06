import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoSetupComponent } from './seo-setup.component';

describe('SeoSetupComponent', () => {
  let component: SeoSetupComponent;
  let fixture: ComponentFixture<SeoSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeoSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
