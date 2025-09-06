import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-tracker-settings',
  imports: [CommonModule,MatSelectModule],
  templateUrl: './tracker-settings.component.html',
  styleUrl: './tracker-settings.component.scss'
})
export class TrackerSettingsComponent {

password: boolean[] = [false, false]; // Add more as needed
 
  togglePassword(index: number): void {
    this.password[index] = !this.password[index];
  }
}
