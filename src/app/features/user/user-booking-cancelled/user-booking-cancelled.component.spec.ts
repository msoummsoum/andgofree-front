import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingCancelledComponent } from './user-booking-cancelled.component';

describe('UserBookingCancelledComponent', () => {
  let component: UserBookingCancelledComponent;
  let fixture: ComponentFixture<UserBookingCancelledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookingCancelledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingCancelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
