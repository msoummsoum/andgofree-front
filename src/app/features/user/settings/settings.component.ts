import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserSettingSidebarComponent } from '../common/user-setting-sidebar/user-setting-sidebar.component';

@Component({
  selector: 'app-settings',
  imports: [RouterModule,UserSettingSidebarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
