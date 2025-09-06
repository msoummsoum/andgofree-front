import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  imports: [RouterLink],
  templateUrl: './reservation-details.component.html',
  styleUrl: './reservation-details.component.scss'
})
export class ReservationDetailsComponent {
routes=routes
constructor(
  private router:Router
){}
directPage():void{
  this.router.navigate([routes.addReservation])
}
}
