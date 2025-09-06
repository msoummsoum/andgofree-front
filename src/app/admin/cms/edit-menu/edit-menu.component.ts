import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-menu',
  imports: [MatSelectModule,RouterLink],
  templateUrl: './edit-menu.component.html',
  styleUrl: './edit-menu.component.scss'
})
export class EditMenuComponent {
routes=routes
}
