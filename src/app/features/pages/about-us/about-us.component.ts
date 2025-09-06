import { Component } from '@angular/core';
import { carousel } from '../../../shared/services/model/model';
import { routes } from '../../../shared/routes';
import { DataService } from '../../../shared/services/data/data.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [CarouselModule,CountUpModule,RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  public carousel: Array<carousel> = [];
  routes = routes;

  constructor(public data: DataService) {
    this.carousel = this.data.carousel;
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
}
