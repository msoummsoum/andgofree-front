import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-messages',
  imports: [CommonModule],
  templateUrl: './user-messages.component.html',
  styleUrl: './user-messages.component.scss'
})
export class UserMessagesComponent {
  public openChat = false;

  public chatOpen() {
    this.openChat = !this.openChat;
  }
}
