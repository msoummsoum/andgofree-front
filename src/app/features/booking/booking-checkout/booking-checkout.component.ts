import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-checkout',
  imports: [RouterLink,FormsModule],
  providers:[DatePipe],
  templateUrl: './booking-checkout.component.html',
  styleUrl: './booking-checkout.component.scss'
})
export class BookingCheckoutComponent {
  routes = routes
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
  constructor( private datePipe: DatePipe,private router: Router) {
    
  }
  hideDeliveryLocation: boolean = false;

    toggleDeliveryLocation() {
        this.hideDeliveryLocation = !this.hideDeliveryLocation;
    }
    
    continueBooking() {
      this.router.navigate(['/booking/booking-adon']);
    }
}
