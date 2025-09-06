import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
    styleUrl: './error404.component.scss',
    imports: [RouterLink]
})
export class Error404Component {
  routes = routes;

}
