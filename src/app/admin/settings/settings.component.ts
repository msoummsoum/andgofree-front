import { Component } from '@angular/core';
import { routes } from '../../shared/routes';
import { RouterModule } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-settings',
  imports: [RouterModule,NgScrollbarModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
routes=routes
}
