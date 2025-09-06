import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
@Component({
  selector: 'app-tax-rates',
  imports: [TagInputModule,CommonModule,FormsModule],
  templateUrl: './tax-rates.component.html',
  styleUrl: './tax-rates.component.scss'
})
export class TaxRatesComponent {
tags=['CGST'];
}
