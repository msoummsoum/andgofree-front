import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-payment',
  imports: [RouterLink,FormsModule],
  templateUrl: './booking-payment.component.html',
  styleUrl: './booking-payment.component.scss'
})
export class BookingPaymentComponent {
public routes = routes;
showAddNewCard: boolean = false;

toggleAddNewCard() {
    this.showAddNewCard = !this.showAddNewCard;
}
constructor(private router: Router) { }

  continueBooking():void {
    this.router.navigate([routes.bookingSuccess]);
  }
}
