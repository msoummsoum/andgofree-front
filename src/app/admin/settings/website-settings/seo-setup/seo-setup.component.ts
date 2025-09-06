import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
@Component({
  selector: 'app-seo-setup',
  imports: [TagInputModule,CommonModule,FormsModule],
  templateUrl: './seo-setup.component.html',
  styleUrl: './seo-setup.component.scss'
})
export class SeoSetupComponent {
tags=['CGST'];
tags2=['Test'];
}
