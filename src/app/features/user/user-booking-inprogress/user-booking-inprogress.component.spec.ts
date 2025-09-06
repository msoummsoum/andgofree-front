import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingInprogressComponent } from './user-booking-inprogress.component';

describe('UserBookingInprogressComponent', () => {
  let component: UserBookingInprogressComponent;
  let fixture: ComponentFixture<UserBookingInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookingInprogressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
