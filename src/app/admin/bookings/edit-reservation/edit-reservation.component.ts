import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { routes } from '../../../shared/routes';

@Component({
  selector: 'app-edit-reservation',
    imports: [CommonModule,FormsModule,MatSelectModule,DatePickerModule,RouterLink,BsDatepickerModule],
  templateUrl: './edit-reservation.component.html',
  styleUrl: './edit-reservation.component.scss'
})
export class EditReservationComponent {
public routes = routes;
  current:number=1
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
  next(): void {
    if(this.current<6){ 
    this.current+=1;
    }
  }
  previous():void{
    if(this.current>1){
      this.current-=1
    }
  }
  constructor(private router:Router){
    
  }
  directPage():void{
    this.router.navigate ([routes.quotation]) 
  }
  directPage1():void{
    this.router.navigate ([routes.reservationDetails]) 
  }
}
