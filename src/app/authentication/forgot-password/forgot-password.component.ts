import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/routes';
import { AuthService } from '../../shared/services/auth/authservice';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  routes = routes;
  form = new FormGroup({
    email: new FormControl('admin@dreamstechnologies.in', [
      Validators.email,
      Validators.required,
    ]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private router: Router, private auth: AuthService) {}
  forgotPassword() {
    if (this.form.valid) {
      this.auth.forgotpassword();
    }
  }
  direction() {
    if (this.form.valid) this.router.navigate([routes.resetPassword]);
  }
}
