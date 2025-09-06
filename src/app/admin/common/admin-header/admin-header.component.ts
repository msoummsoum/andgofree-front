import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes';
import { CommonService } from '../../../shared/services/common/common.service';
import { DataService } from '../../../shared/services/data/data.service';
import { SidebarService } from '../../../shared/services/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css',
  imports:[CommonModule,RouterLink]
})
export class AdminHeaderComponent {
  routes=routes
  base = '';
  page = '';
  last = '';
  themeColor = 'light-mode';
  public themeMode: string = '';
  public darkTheme = false;
  public showDark = false;
  public toggleSidebar(): void {
    this.sidebar.switchSideMenuPosition();
  }
  constructor(
    private common: CommonService,
    private data: DataService,
    public sidebar: SidebarService,
    private renderer: Renderer2, private el: ElementRef
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

    this.sidebar.themeColors.subscribe((res: string) => {
      this.themeColor = res;
    });
  }
  public togglesMobileSideBar(): void {
    this.sidebar.switchMobileSideBarPosition();
  }
  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light-mode';
    this.sidebar.changeThemeColor(themeColor);
  }
}
