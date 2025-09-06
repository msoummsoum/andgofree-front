import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authentication',
  imports: [RouterModule],
  templateUrl: './authentication.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

}
