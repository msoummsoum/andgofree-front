import { Component, HostListener } from '@angular/core';
import { routes } from '../../../shared/routes';
import { CommonService } from '../../../shared/services/common/common.service';
import { header } from '../../../shared/services/model/model';
import { DataService } from '../../../shared/services/data/data.service';
import { SidebarService } from '../../../shared/services/sidebar/sidebar.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
     imports: [RouterLink,CommonModule,RouterLinkActive]
})
export class HeaderComponent {
  base = '';
  page = '';
  last = '';
  header: header[] = [];
  isHovered=false;
  isFixed = false;
  routes = routes;
  isDropdownOpen=false;
  isDropdownOpen1=false;
   openDropdownIndex: number | null = null;
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
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Add a fixed class when the scroll position is greater than 50px
    this.isFixed = window.pageYOffset > 40;
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
