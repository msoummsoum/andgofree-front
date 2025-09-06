import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../shared/routes';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  routes=routes
password: boolean[] = [false, false]; // Add more as needed
 
  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }
  constructor(private router:Router){}
  directPage():void{
    this.router.navigate([routes.adminlogin])
  }
}
