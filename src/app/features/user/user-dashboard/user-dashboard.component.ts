import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
interface data {
  value: string;
}
@Component({
  selector: 'app-user-dashboard',
  imports: [RouterLink,MatSelectModule,FormsModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];
  selectedList2: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];
}
