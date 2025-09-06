import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonService } from '../../shared/services/common/common.service';
import { routes } from '../../shared/routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [RouterModule,CommonModule,RouterLinkActive],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  routes = routes;
  base = '';
  page = '';
  last = '';
  customRouteBookings = false;
  customRouteSettings = false;

  constructor(private common: CommonService, public router: Router) {
    this.common.base.subscribe((res: string) => {
      this.base = res?.replaceAll('-', ' ');
    });
    this.common.page.subscribe((res: string) => {
      this.page = res?.replaceAll('-', ' ');
    });
    this.common.last.subscribe((res: string) => {
      this.last = res?.replaceAll('-', ' ');
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routesActive();
      }
      if (event instanceof NavigationEnd) {
        this.routesActive();
      }
    });
  }
  ngOnInit() {
    this.routesActive();
  }
  public routesActive() {
    if (
      this.page == 'user booking upcoming' ||
      this.page == 'user booking inprogress' ||
      this.page == 'user booking complete' ||
      this.page == 'user booking cancelled' ||
      this.page ==  'user bookings' ||
      this.page == 'User Bookings' ||
      this.page == 'bookings calendar'||
      this.page == 'booking upcoming calendar'||
      this.page == 'booking inprogress calendar'||
      this.page == 'booking complete calendar'||
      this.page == 'booking cancelled calendar'
    ) {
      this.customRouteBookings = true;
    } else if (this.page === 'settings' || this.page === 'User Settings') {
      this.customRouteSettings = true;
      this.page = 'User Settings';
    } else {
      this.customRouteBookings = false;
      this.customRouteSettings = false;
    }
  }
}
