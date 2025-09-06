import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-invoice',
  imports: [RouterLink,MatSelectModule,BsDatepickerModule],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.scss'
})
export class EditInvoiceComponent {
  routes=routes
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
}
