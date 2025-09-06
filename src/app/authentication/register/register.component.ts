import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/routes';
import { AuthService } from '../../shared/services/auth/authservice';

@Component({
  selector: 'app-register',
  imports: [FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  routes = routes;
  public CustomControler!: string | number;
  public isValidConfirmPassword = false;
  public show_password = true;
  form = new FormGroup({
    Username: new FormControl('dreamstechnologies', [Validators.required]),
    email: new FormControl('admin@dreamstechnologies.in', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}

  signup() {
    if (this.form.valid) {
      this.auth.signup();
    }
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }
}
