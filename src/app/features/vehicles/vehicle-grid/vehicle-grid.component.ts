import { Component } from '@angular/core';
import { vehicleGrid } from '../../../shared/services/model/model';
import { DataService } from '../../../shared/services/data/data.service';
import { CommonModule, DatePipe } from '@angular/common';
import { routes } from '../../../shared/routes';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
interface data {
  value: string ;
}
@Component({
  selector: 'app-vehicle-grid',
  imports: [CarouselModule,RouterLink,CommonModule,MatSliderModule,MatSelectModule,BsDatepickerModule,FormsModule,TimepickerModule],
  providers:[DatePipe],
  templateUrl: './vehicle-grid.component.html',
  styleUrl: './vehicle-grid.component.scss'
})
export class VehicleGridComponent {
  public selectedValue1!: string;
  public selectedValue2!: string;
  public selectedValue3!: string;
  public vehicleGrid: vehicleGrid[] = [];

  constructor(private data: DataService,private datePipe: DatePipe) {
    this.vehicleGrid = this.data.vehicleGrid;
  }

  routes = routes;

  slidevalue = 55;

  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
  ];
  selectedList2: data[] = [{ value: 'Newest' }, { value: 'Relevance' },{ value: 'Low to High' },{ value: 'High to Low' },{ value: 'Best Rated' },{ value: 'Distance' },{ value: 'Popularity' }];
  selectedList3: data[] = [
    { value: 'Popular' },
    { value: 'Toyota Camry SE 350' },
    { value: 'Audi A3 2019 new' },
    { value: 'Ferrari 458 MM Speciale' },
    { value: 'Chevrolet Camaro' },
    { value: 'Acura Sport Version' },
  ];
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
  carOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: true,
    dots: false,
    loop: true,
    rtl: false,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
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
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
}

