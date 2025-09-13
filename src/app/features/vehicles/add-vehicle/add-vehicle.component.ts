import { Component, HostListener, inject, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { VehicleConfigurationResponse, VehicleRequest } from '../../../shared/backDto';
import { VehicleService } from '../vehicle-service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-vehicle',
  imports: [MatSelectModule,RouterLink, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatSelectModule],
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
           color: ['', Validators.required],
           brand: ['', Validators.required],
           model: ['', Validators.required],
           licensePlateNumber: ['', Validators.required],
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
    if (this.addVehicleForm.invalid) return;

    const formValue = this.addVehicleForm.value;

    const selectedSpecifications = formValue.specifications
      .map((checked: boolean, i: number) =>
        checked ? this.vehicleConfiguration!.specifications[i].key : null
      )
      .filter((v: string | null) => v !== null);

    console.log({
      ...formValue,
      specifications: selectedSpecifications
    });
     const vehicleRequest: VehicleRequest = {
    id: 0,
    title: formValue.title,
    brand: formValue.brand,
    model: formValue.model,
    licensePlateNumber: formValue.licensePlateNumber,
    year: formValue.year,
    color: formValue.color,
    seats: formValue.seats,
    vehicleCategory: formValue.category,
    fuelType: formValue.fuelType,
    transmission: formValue.transmission,
    specifications: selectedSpecifications
  };

  this.vehicleService.createVehicle(vehicleRequest).subscribe({
    next: (res) => console.log('Véhicule créé', res),
    error: (err) => console.error(err)
  });
  }
}
