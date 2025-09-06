import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
import { routes } from '../../shared/routes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [NgClass,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginCompoment {
 routes=routes
  password: boolean[] = [false, false]; // Add more as needed
 
  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }
  constructor(private router:Router){}
directIndex(): void {
  this.router.navigate([routes.adminDashboard]);
}
} 
