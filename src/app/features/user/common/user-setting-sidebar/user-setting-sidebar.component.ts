import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-user-setting-sidebar',
    templateUrl: './user-setting-sidebar.component.html',
    styleUrl: './user-setting-sidebar.component.css',
    imports: [RouterLink,RouterLinkActive]
})
export class UserSettingSidebarComponent {
public routes = routes
}
