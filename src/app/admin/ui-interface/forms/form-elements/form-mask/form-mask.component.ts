import { Component } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { routes } from '../../../../../shared/routes';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-form-mask',
    templateUrl: './form-mask.component.html',
    styleUrls: ['./form-mask.component.scss'],
    imports: [NgxMaskModule,RouterLink]
})
export class FormMaskComponent{
  routes = routes
}
 