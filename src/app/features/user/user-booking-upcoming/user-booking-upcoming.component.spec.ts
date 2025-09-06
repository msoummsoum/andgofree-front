import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingUpcomingComponent } from './user-booking-upcoming.component';

describe('UserBookingUpcomingComponent', () => {
  let component: UserBookingUpcomingComponent;
  let fixture: ComponentFixture<UserBookingUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookingUpcomingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
