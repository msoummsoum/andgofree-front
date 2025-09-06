import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { LightgalleryModule } from 'lightgallery/angular';
interface Select {
  name: string,
}
@Component({
  selector: 'app-add-car',
  imports: [CommonModule,MatSelectModule,FormsModule,RouterLink,LightgalleryModule,MultiSelectModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent {
routes=routes
  items!: Select[];//multiselect
  selectedItems!: Select[];//multiselect
  isCheck:boolean[]=[false];
  checkActive:boolean[]=[false];
  toActive:boolean[]=[false];
  isTrash:boolean[]=[false];
  current:number=1
  next(): void {
    if(this.current<9){
    this.current+=1;
    }
  }
  previous():void{
    if(this.current>1){
      this.current-=1
    }
  }
  constructor(private router: Router ){
    this.items = [
      {name: 'Evans Dealer Car Zone',},
      {name: 'Allen Dealer Parking Lot', },
      {name: 'Walker Auto Trade Yard'},
  ];
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
  directPage():void{
    this.router.navigate([routes.cars])
  }
  check(index:number):void{
    this.isCheck[index]=!this.isCheck[index]
  }
  toggleActive(index:number):void{
    this.toActive[index]=!this.toActive[index]
  }
  currentActive(index:number):void{
    this.checkActive[index]=!this.checkActive[index]
  }
  trash(index:number):void{
    this.isTrash[index]=!this.isTrash[index]
  }
}
