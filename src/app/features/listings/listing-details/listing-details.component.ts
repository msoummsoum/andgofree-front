import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { interestedCars, listingDetails, thumbnails } from '../../../shared/services/model/model';
import { DataService } from '../../../shared/services/data/data.service';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { CommonModule, DatePipe } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightgalleryModule } from 'lightgallery/angular';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
interface data {
  value: string ;
}
interface gallery {
  src: string
}

@Component({
  selector: 'app-listing-details',
  imports: [CarouselModule,RouterLink,MatSelectModule,FormsModule,SlickCarouselModule,LightgalleryModule,LightboxModule,TimepickerModule,BsDatepickerModule,CommonModule],
  providers:[DatePipe],
  templateUrl: './listing-details.component.html',
  styleUrl: './listing-details.component.scss'
})
export class ListingDetailsComponent {
  routes = routes;
  public gallery: Array<gallery> = [];
  public listingDetails: listingDetails[] = [];
  public thumbnails: thumbnails[] = [];
  public interestedCars: interestedCars[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  myTime3: Date = new Date();
  myTime4: Date = new Date();
  public selectedValue1 !: string;
  public selectedValue2 !: string;
  selectedList1: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },
    
  ];
  selectedList2: data[] = [
    { value: 'Newyork Office - 78, 10th street Laplace USA' },
    { value: 'Newyork Office - 12, 5th street USA' },
    
  ];
  constructor(private data: DataService, private datePipe: DatePipe,private _lightbox: Lightbox) {
    this.listingDetails = this.data.listingDetails;
    this.thumbnails = this.data.thumbnails;
    this.interestedCars = this.data.interestedCars;
    for (let i = 1; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery-big-0' + i + '.jpg';
      this.gallery.push({ src: src });
    }
  }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.detail-bigimg',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  interestedCarsOptions: OwlOptions = {
    loop:true,
    margin:24,
    nav:false,
    dots: false,
    autoplay:false,
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
        items:2
      },
      1000:{
        items:3
      }
    }
  };
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
 
  
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }
 showMore=false;
 isShow():void{
  this.showMore=!this.showMore
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