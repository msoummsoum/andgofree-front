import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-permissions',
  imports: [CustomPaginationComponent,RouterLink],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.scss'
})
export class PermissionsComponent {
routes=routes
isSelect1:boolean[]=[false]
isSelect12:boolean[]=[false]
select1(index:number){
this.isSelect1[index]=!this.isSelect1[index]
this.isSelect12[index]=!this.isSelect12[index]
}
}
