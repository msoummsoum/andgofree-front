import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VehicleService } from './vehicle-service';
import { VehicleDTO } from '../../shared/backDto';

@Component({
  selector: 'app-vehicles',
  imports: [RouterModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {
  private readonly vehicleService = inject(VehicleService);

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe({
      next: (vehicles: VehicleDTO[]) => {
        console.log(vehicles)
      }
    })
  }
}
