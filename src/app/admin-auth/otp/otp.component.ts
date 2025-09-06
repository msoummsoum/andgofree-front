import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { routes } from '../../shared/routes';
@Component({
  selector: 'app-otp',
  imports: [FormsModule,InputOtpModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {
routes=routes
  value : any
  constructor(private router:Router){}
  directPage():void{
    this.router.navigate([routes.adminResetPassword])
  }
  resetotp():void{
    this.value=null;
  }
}
