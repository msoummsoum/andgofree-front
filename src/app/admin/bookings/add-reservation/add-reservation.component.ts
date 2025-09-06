import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DatePickerModule } from 'primeng/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-reservation',
  imports: [CommonModule,FormsModule,MatSelectModule,DatePickerModule,RouterLink,BsDatepickerModule],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.scss'
})
export class AddReservationComponent {
  public routes = routes;
  current:number=1
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
  isActive: string | null = '';
  isActive1: string | null = '';

  setActive(theme: string) {
    this.isActive = theme;
  }
  setActive1(theme: string) {
    this.isActive1 = theme;
  }
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
    this.router.navigate ([routes.quotation]) 
  }
}
