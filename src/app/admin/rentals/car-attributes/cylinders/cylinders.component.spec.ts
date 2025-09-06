import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylindersComponent } from './cylinders.component';

describe('CylindersComponent', () => {
  let component: CylindersComponent;
  let fixture: ComponentFixture<CylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CylindersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
