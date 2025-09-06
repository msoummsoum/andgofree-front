import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { routes } from '../../../../shared/routes';
import { FormsModule } from '@angular/forms';
interface data {
  value: string;
}
@Component({
  selector: 'app-user-preferences',
  imports: [MatSelectModule,FormsModule],
  templateUrl: './user-preferences.component.html',
  styleUrl: './user-preferences.component.scss'
})
export class UserPreferencesComponent {
  routes = routes;
  public selectedValue1!: string;
  public selectedValue2!: string;
  selectedList1: data[] = [
    { value: 'English' },
    { value: 'Japanese' },
   
  ];
  selectedList2: data[] = [
    { value: 'United States (English)' },
    { value: 'Japan (Japanese)' },
   
  ];
}
