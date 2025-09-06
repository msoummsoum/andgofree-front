import { AfterViewInit, Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { carTypes, popularCars1, popularCars2, popularCars3, popularCars4, popularCars5, popularCars6, recommendedCar, testimonial } from '../../../shared/services/model/model';
import { DataService } from '../../../shared/services/data/data.service';
import { CommonModule, DatePipe } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { DatePickerModule } from 'primeng/datepicker';
import { TimepickerActions, TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-home1',
  imports: [RouterLink,CarouselModule,CommonModule,CountUpModule,DatePickerModule,TimepickerModule,FormsModule,BsDatepickerModule],
  providers: [DatePipe],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.scss'
})
export class Home1Component implements AfterViewInit {
  routes = routes;
  public popularCars1: popularCars1[] = [];
  public popularCars2: popularCars2[] = [];
  public popularCars3: popularCars3[] = [];
  public popularCars4: popularCars4[] = [];
  public popularCars5: popularCars5[] = [];
  public popularCars6: popularCars6[] = [];
  public recommendedCar: recommendedCar[] = [];
  public testimonial: testimonial[] = [];
  public carTypes: carTypes[] = [];
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();


  constructor(private data: DataService, private datePipe: DatePipe) {
    this.popularCars1 = this.data.popularCars1;
    this.popularCars2 = this.data.popularCars2;
    this.popularCars3 = this.data.popularCars3;
    this.popularCars4 = this.data.popularCars4;
    this.popularCars5 = this.data.popularCars5;
    this.popularCars6 = this.data.popularCars6;
    this.recommendedCar = this.data.recommendedCar;
    this.testimonial = this.data.testimonial;
    this.carTypes = this.data.carTypes;
  }

  recommendedCarOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
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
        items: 3,
      },
    },
  };
  testimonialOptions: OwlOptions = {
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
  carTypesOptions: OwlOptions = {
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
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
  carimagesliderOwlOptions: OwlOptions = {
    loop:true,
    margin:24,
    nav:true,
    dots:true,
    smartSpeed: 2000,
    autoplay:false,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
      0:{
        items:1
      },				
      550:{
        items:1
      },
      768:{
        items:1
      },
      1000:{
        items:1
      }
    }
  };
  public ngAfterViewInit(): void{
    window.dispatchEvent(new Event('resize'))
  }
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
  tab1 = true;
  tab2 = false;
  tab3 = false;
  tab4 = false;
  tab5 = false;
  tab6 = false;

  isTab1():void{
    this.tab1=true;
    this.tab2=false;
    this.tab3=false;
    this.tab4=false;
    this.tab5=false;
    this.tab6=false;
  }
  isTab2():void{
    this.tab2=true;
    this.tab1=false;
    this.tab3=false;
    this.tab4=false;
    this.tab5=false;
    this.tab6=false;
  }
  isTab3():void{
    this.tab3=true;
    this.tab1=false;
    this.tab2=false;
    this.tab4=false;
    this.tab5=false;
    this.tab6=false;
  }
  isTab4():void{
    this.tab4=true;
    this.tab1=false;
    this.tab3=false;
    this.tab2=false;
    this.tab5=false;
    this.tab6=false;
  }
  isTab5():void{
    this.tab5=true;
    this.tab1=false;
    this.tab3=false;
    this.tab4=false;
    this.tab2=false;
    this.tab6=false;
  }
  isTab6():void{
    this.tab6=true;
    this.tab1=false;
    this.tab3=false;
    this.tab4=false;
    this.tab5=false;
    this.tab2=false;
  }

}
