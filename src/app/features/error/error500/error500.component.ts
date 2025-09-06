import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error500',
    templateUrl: './error500.component.html',
    styleUrl: './error500.component.scss',
    imports: [RouterLink]
})
export class Error500Component {
  routes = routes;

}
