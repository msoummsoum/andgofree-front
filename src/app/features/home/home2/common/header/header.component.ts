import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LightGallery } from 'lightgallery/lightgallery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lightGallery from 'lightgallery';
import { routes } from '../../../../../shared/routes';
import { header } from '../../../../../shared/services/model/model';
import { CommonService } from '../../../../../shared/services/common/common.service';
import { DataService } from '../../../../../shared/services/data/data.service';
import { SidebarService } from '../../../../../shared/services/sidebar/sidebar.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
interface data {
  value: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [MatSelectModule,FormsModule,CarouselModule,RouterLink,CommonModule,BsDatepickerModule,RouterLinkActive]
})
export class HeaderComponent  {
  @ViewChild('videoGallery') videoGallery!: ElementRef;
  routes = routes
  isHovered=false;
  isFixed = false;
      isDropdownOpen=false;
  isDropdownOpen1=false;
   openDropdownIndex: number | null = null;
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
  bannerimgOwlOptions: OwlOptions = {
    loop:true,
			margin:2,
      autoWidth:true,
			nav:true,
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
				1200:{
					items:1
				}
			}
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.pageYOffset > 40;
    const scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const headerOne = document.querySelector('.header-two');
    if (headerOne && scroll > 35) {
      headerOne.classList.add('header-fixed');
    } else if (headerOne) {
      headerOne.classList.remove('header-fixed');
    }
  }
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar : SidebarService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;
  }
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }
         openSubMenu():void{
      this.isDropdownOpen=!this.isDropdownOpen;
      this.openDropdownIndex=null;
    }
    toggleSubMenu(index: number): void {
      // If the clicked menu is already open, close it
      this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
      this.isDropdownOpen=false;
    }
}
