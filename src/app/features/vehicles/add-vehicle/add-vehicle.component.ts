import { Component, HostListener, inject, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { VehicleConfigurationResponse } from '../../../shared/backDto';
import { VehicleService } from '../vehicle-service';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  imports: [MatSelectModule,RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss',
  standalone: true
})
export class AddVehicleComponent implements OnInit {
  private readonly vehicleService = inject(VehicleService);
  private readonly fb = inject(FormBuilder);
  addVehicleForm!: FormGroup;

  vehicleConfiguration?: VehicleConfigurationResponse;

routes=routes
  tabs = [
    { id: 'info', label: 'Informations de base' },
    { id: 'registration', label: 'Registration' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'gallery', label: 'Gallery' },
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
        const specsArray = this.vehicleConfiguration.specifications.map(() => this.fb.control(false));
        this.addVehicleForm.setControl('specifications', this.fb.array(specsArray));
      }
    });
     this.addVehicleForm = this.fb.group({
           title: ['', Validators.required],
           condition: ['', Validators.required],
           year: ['', Validators.required],
           category: ['', Validators.required],
           brand: ['', Validators.required],
           model: ['', Validators.required],
           registrationNumber: ['', Validators.required],
           fuelType: ['', Validators.required],
           mileage: ['', Validators.required],
           doors: ['', Validators.required],
           seats: ['', Validators.required],
           specifications: this.fb.array([])
         });
  }

 get specificationsArray(): FormArray {
    return this.addVehicleForm.get('specifications') as FormArray;
  }

 onSubmit() {
    //if (this.addVehicleForm.invalid) return;

    const formValue = this.addVehicleForm.value;

    // Récupérer les specs cochées
    const selectedSpecs = formValue.specifications
      .map((checked: boolean, i: number) =>
        checked ? this.vehicleConfiguration!.specifications[i].key : null
      )
      .filter((v: string | null) => v !== null);

    console.log({
      ...formValue,
      specifications: selectedSpecs
    });
  }
}
