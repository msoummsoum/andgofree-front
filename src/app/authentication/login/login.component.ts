import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../shared/routes';
import { AuthService } from '../../shared/services/auth/authservice';

@Component({
  selector: 'app-login',
  imports: [RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  routes = routes;
  public show_password = true;

  form = new FormGroup({
    email: new FormControl('admin@dreamstechnologies.in', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('123456', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private auth: AuthService) {}

  signin() {
    if (this.form.valid) {
      this.auth.signin();
    }
  }
  togglePassword() {
    this.show_password = !this.show_password;
  }
  ngOnInit(): void {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }
}