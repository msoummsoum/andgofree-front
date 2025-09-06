import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home-new',
  imports: [RouterLink,CarouselModule,CommonModule,BsDatepickerModule,MatSelectModule],
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.scss'
})
export class HomeNewComponent {
  routes=routes
  Date=new Date();
  isSelected:boolean[]=[false];
  toSelect:boolean[]=[false];
  selected(index:number):void{
    this.isSelected[index]=!this.isSelected[index]
  }
  toSelected(index:number):void{
    this.toSelect[index]=!this.toSelect[index]
  }
  constructor(private router:Router){

  }
  directePage() : void{
    this.router.navigate([routes.vehicleGrid])
  }
public imgSlider:OwlOptions={
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
}
public brandSlider:OwlOptions={
  loop:true,
			margin:70,
			nav:false,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
			responsive:{
				0:{
					items:2
				},
				767:{
					items:4
				},
				1200:{
					items:5
				},
				1400:{
					items:6
				}
			}
}
public carSlider:OwlOptions={
  loop:true,
			margin:0,
			nav:true,
			dots: false,
			autoplay:false,
			smartSpeed: 2000,
			navText : ["<i class='bx bx-left-arrow-alt'></i>","<i class='bx bx-right-arrow-alt'></i>"],
			responsive:{
				0:{
					items:1
				},
			}
}
public clientSlider:OwlOptions={
  loop:true,
			margin:70,
			nav:false,
			dots: false,
			autoplay:true,
			smartSpeed: 2000,
			responsive:{
				0:{
					items:2
				},
				767:{
					items:4
				},
				1200:{
					items:5
				},
				1400:{
					items:6
				}
			}
}
}
