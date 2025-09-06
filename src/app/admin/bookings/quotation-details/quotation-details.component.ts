import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quotation-details',
  imports: [RouterLink],
  templateUrl: './quotation-details.component.html',
  styleUrl: './quotation-details.component.scss'
})
export class QuotationDetailsComponent {
routes=routes
}
