import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './auth.component.scss'
})
export class Auth {

}
