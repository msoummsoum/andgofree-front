import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes';


@Component({
    selector: 'app-ui-popovers',
    templateUrl: './ui-popovers.component.html',
    styleUrl: './ui-popovers.component.scss',
    imports: []
})
export class UiPopoversComponent {
  public routes = routes;
}
