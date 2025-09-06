import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  imports: [RouterLink],
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.scss'
})
export class AllBlogsComponent {
routes=routes
}
