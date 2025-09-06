import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingCompleteComponent } from './user-booking-complete.component';

describe('UserBookingCompleteComponent', () => {
  let component: UserBookingCompleteComponent;
  let fixture: ComponentFixture<UserBookingCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBookingCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBookingCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
