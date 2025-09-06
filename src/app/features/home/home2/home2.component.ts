import { Component, Renderer2, ViewChild } from '@angular/core';
import { routes } from '../../../shared/routes';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightboxModule } from 'ngx-lightbox';
import { LightgalleryModule } from 'lightgallery/angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselComponent } from 'ngx-owl-carousel-o';

interface data {
  value: string;
}
@Component({
  selector: 'app-home2',
  imports: [HeaderComponent,FooterComponent,RouterLink,CountUpModule,CarouselModule,MatSelectModule,FormsModule,CommonModule,LightboxModule,LightgalleryModule,BsDatepickerModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component {
    @ViewChild('bannerCarousel') bannerCarousel!: CarouselComponent;

  routes = routes
  ProfessionalOwlOptions: OwlOptions = {
    loop:true,
			margin:24,
			nav:true,
			dots:false,
			smartSpeed: 2000,
			autoplay:false,
      navText : ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
      responsive:{
				0:{
					items:1
				},				
				550:{
					items:3
				},
				768:{
					items:4
				},
				1000:{
					items:5
				},
				1200:{
					items:5

				}
			}
  };
  carOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: true,
    loop: true,
    rtl: false,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  locationOwlOptions: OwlOptions = {
    loop: true,
			margin: 15,
			dots: false,
			nav: true,
			navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
      responsive: {
				0: {
					items: 1
				},
				500: {
					items: 2
				},
				768: {
					items: 3
				},
				1000: {
					items: 3
				},
				1300: {
					items: 4
				}
			}
  };
  yachtOwlOptions: OwlOptions = {
    loop: true,
    margin: 1,
    dots: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  };
  yachttypeOwlOptions: OwlOptions = {
    loop:true,
			margin:24,
			nav:false,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
      responsive:{
				0:{
					items:2
				},
				
				550:{
					items:8
				},
				1200:{
					items:8
				},
				1400:{
					items:10
				}
			}
  };
  popularlocationOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    loop: true,
    rtl: false,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  public selectedValue1!: string;
  public selectedValue2!: string;
  selectedList1: data[] = [
    { value: 'Choose Location' },
    { value: 'Newyork' },
    
  ];
  selectedList2: data[] = [
    { value: 'Catamaran' },
    { value: 'Motor yachts' },
    { value: 'Sailing yachts' },
    
  ];
  public bannerimgOwlOptions: OwlOptions = {
    loop:true,
			margin:2,  
			nav:true,
			dots: false,
			autoplay:false,
      autoWidth:false,
			smartSpeed: 2000,
			navText : ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
      responsive:{
        0:{
          items:1
        },
        
        550:{
          items:1
        },
        700:{
          items:1
        },
        1000:{
          items:1
        },
        1200:{
          items:1
        }
      }
  };

  constructor(private renderer:Renderer2){}
    ngOnInit(): void {
    const body = document.body;
    this.renderer.addClass(body, 'home-two');
  }
  ngOnDestroy(): void {
    const body = document.body;
    this.renderer.removeClass(body, 'home-two');
  }
   settings = {
       counter: false,
       plugins: [lgZoom, lgVideo],
     };
     private lightGallery!: LightGallery;
     private needRefresh = false;
     ngAfterViewChecked(): void {
       if (this.needRefresh) {
         this.lightGallery.refresh();
         this.needRefresh = false;
       }
     
     }
     onInit = (detail: { instance: LightGallery }): void => {
       this.lightGallery = detail.instance;
   
     };
     onBeforeSlide = (detail: BeforeSlideDetail): void => {
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       const { index, prevIndex } = detail;
     };
  
}