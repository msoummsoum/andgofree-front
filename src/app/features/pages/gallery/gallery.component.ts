import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink,LightgalleryModule,LightboxModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  routes = routes;
 

 

}
