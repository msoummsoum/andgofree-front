import { Component, HostListener, inject, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { VehicleConfigurationResponse } from '../../../shared/backDto';
import { VehicleService } from '../vehicle-service';

@Component({
  selector: 'app-add-vehicle',
  imports: [MatSelectModule,RouterLink],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent implements OnInit {
  private readonly vehicleService = inject(VehicleService);
  vehicleConfiguration?: VehicleConfigurationResponse;

routes=routes
  tabs = [
    { id: 'info', label: 'Basic Info' },
    { id: 'registration', label: 'Registration' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'service', label: 'Service' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'description', label: 'Description' },
    { id: 'terms', label: 'Terms' },
    { id: 'policy', label: 'policy' },
    { id: 'cancellation', label: 'Cancellation' },
    { id: 'features', label: 'Features' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location' },
  ];

  activeTab: string = this.tabs[0].id ; // Default to the first tab

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  this.tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) {
        const sectionTop = element.offsetTop - 100; // Adjust offset for fixed headers
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeTab = tab.id;
        }
      }
    });
  }


  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeTab = id; // Update the active tab
    }
  }

    

  ngOnInit() {
    this.vehicleService.getVehiclesConfiguration().subscribe({
      next: (vehicleConfiguration: VehicleConfigurationResponse) => {
        this.vehicleConfiguration = vehicleConfiguration;
        console.log(vehicleConfiguration)
      }
    })
  }
}
