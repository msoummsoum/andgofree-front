import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink, RouterOutlet,Event as RouterEvent, NavigationEnd } from '@angular/router';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SidebarService } from '../shared/services/sidebar/sidebar.service';
import { CommonService } from '../shared/services/common/common.service';
import { AdminHeaderComponent } from './common/admin-header/admin-header.component';
import { AdminSidebarComponent } from './common/admin-sidebar/admin-sidebar.component';
import { CommonModule } from '@angular/common';
export interface url {
  url: string;
}
@Component({
  selector: 'app-admin',
  imports: [RouterOutlet,BsDatepickerModule,AdminHeaderComponent,AdminSidebarComponent,CommonModule],
  templateUrl: './admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
public miniSidebar = false;
  public expandMenu = false;
  public mobileSidebar = false;
  public footerActive = false;
  public headerActive = false;
  base = '';
  page = '';
  last = '';
  currentUrl = '';
  sideBaractivePath=false;
  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private common:CommonService
  ) {
    this.sidebar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == 'true') {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    this.common.page.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.sidebar.expandSideBar.subscribe((res: boolean) => {
      this.expandMenu = res;
    });
    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationEnd) {
        localStorage.removeItem('isMobileSidebar');
        this.mobileSidebar = false;
      }
    });
    this.sidebar.sideBarPosition.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    // this.getRoutes(this.Router);
  }
    public getRoutes(events: NavigationEnd) {
      const splitVal = events.url.split('/');
      this.common.base.next(splitVal[2]);
      this.common.page.next(splitVal[3]);
      this.common.last.next(splitVal[4]);
      this.currentUrl = events.url;  
     
      if(events.url.split('/admin/')[2] === 'add-reservation'){
        this.sideBaractivePath = true;
      } else {
        this.sideBaractivePath = false;
      }
    }
    ngOnDestroy(): void {
      this.sidebar.changeThemeColor('light-mode');
    }
}
