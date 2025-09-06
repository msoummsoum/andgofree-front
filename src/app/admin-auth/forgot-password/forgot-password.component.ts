import { Component } from '@angular/core';
import { routes } from '../../shared/routes';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterModule,FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  routes=routes
  constructor(private router:Router){}
  directPage():void{
    this.router.navigate([this.routes.adminOtp])
  }
}
