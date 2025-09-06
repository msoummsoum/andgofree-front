import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';
import intlTelInput from 'intl-tel-input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-quotations',
  imports: [MatSelectModule,CommonModule,RouterLink,DatePickerModule,FormsModule,BsDatepickerModule],
  templateUrl: './edit-quotations.component.html',
  styleUrl: './edit-quotations.component.scss'
})
export class EditQuotationsComponent {
routes=routes;
time: Date[] | undefined;
time2: Date[] | undefined; 
current:number=1
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
ngAfterViewInit(): void {
  const input = document.querySelector('#phone') as HTMLInputElement;
  const input2 = document.querySelector('#phone2') as HTMLInputElement;
  intlTelInput(input, {
    initialCountry: 'us',
    preferredCountries: ['us', 'gb', 'in'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
  }as any);
  intlTelInput(input2, {
    initialCountry: 'us',
    preferredCountries: ['us', 'gb', 'in'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
  }as any);
      // Restrict input to numbers, "+", and allowed characters
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
      });
      input2.addEventListener('input', () => {
        input2.value = input2.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
      });
} 
}
