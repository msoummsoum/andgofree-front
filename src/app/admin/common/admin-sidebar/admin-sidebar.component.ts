import { Component } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent, RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes';
import { SidebarService } from '../../../shared/services/sidebar/sidebar.service';
import { CommonService } from '../../../shared/services/common/common.service';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgScrollbarModule } from 'ngx-scrollbar';
export interface url {
  url: string;
}
interface MenuItem {
  menuValue: string;
  showSubRoute: boolean;
  menu: SubMenu[];
}

interface SubMenu {
  menuValue: string;
  showSubRoute: boolean;
}
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css',
  imports:[CommonModule,BsDatepickerModule,NgScrollbarModule,RouterLink]
})
export class AdminSidebarComponent {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  currentUrl = '';
  public sideBaractivePath = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public side_bar_data: Array<any> = [];

  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private router: Router,
    private common :CommonService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.side_bar_data = this.sidebar.sidebarData;
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;  
    this.base = splitVal[2];
    this.page = splitVal[3];
    this.last = splitVal[4];
    this.common.base.next(splitVal[2]);
    this.common.page.next(splitVal[3]);
    this.common.last.next(splitVal[4]);
    if(route.url.split('/admin/')[2] === 'add-reservation'){
      this.sideBaractivePath = true;
    } else {
      this.sideBaractivePath = false;
    }
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
  expandSubMenus(menu: MenuItem): void {

    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.forEach((mainMenus: MenuItem) => {
      mainMenus.menu.forEach((resMenu: SubMenu) => {
        if (resMenu.menuValue === menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
          this.multiLevel1 = false;
        }
        else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }

  openMenuItem: MenuItem | null = null;
  openSubmenuOneItem: SubMenu[] | null = null;
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;

  openMenu(menu: MenuItem): void {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
      menu.showSubRoute = false;
    }
  }
  
  openSubmenuOne(subMenus: SubMenu[]): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }

  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
    this.multiLevel2=true;
  }

}
