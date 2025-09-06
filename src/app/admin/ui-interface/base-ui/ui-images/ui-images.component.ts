import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes';


@Component({
    selector: 'app-ui-images',
    templateUrl: './ui-images.component.html',
    styleUrl: './ui-images.component.scss',
    imports: []
})
export class UiImagesComponent {
  public routes = routes;
}
