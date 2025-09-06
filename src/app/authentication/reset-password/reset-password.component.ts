import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { routes } from '../../shared/routes';
import { AuthService } from '../../shared/services/auth/authservice';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  routes = routes;
  public show_password1 = true;
  public show_password2 = true;
  public confirmPassword = true;

  form = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }
  constructor(private auth: AuthService) {}

  resetpassword() {
    if (
      this.form.value.password === this.form.value.confirmpassword &&
      this.form.valid
    ) {
      this.confirmPassword = true;
      this.auth.signin();
    } else {
      this.confirmPassword = false;
      this.auth.forgotpassword();
    }
  }
  
}
