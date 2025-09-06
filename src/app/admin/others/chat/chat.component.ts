import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [RouterLink],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
routes = routes
}
