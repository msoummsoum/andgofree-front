import { Component, effect, HostListener, inject, OnInit, signal } from '@angular/core';
import { routes } from '../../../shared/routes';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { VehicleBrand, VehicleConfigurationResponse, VehicleModelResponse, VehicleRequest } from '../../../shared/backDto';
import { VehicleService } from '../vehicle-service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime, distinctUntilChanged, forkJoin, map, Observable, startWith } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatOptionModule } from '@angular/material/core';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-vehicle',
  imports: [MatSelectModule,RouterLink, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatSelectModule,
   MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    AsyncPipe,  CommonModule
    ],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss',
  standalone: true
})
export class AddVehicleComponent implements OnInit {
  private readonly vehicleService = inject(VehicleService);
  private readonly fb = inject(FormBuilder);
  filteredModels= signal<VehicleModelResponse[]>([]);

  addVehicleForm!: FormGroup;

  vehicleConfiguration?: VehicleConfigurationResponse;
  photoConfigs: any[] = [];
  allBrands: VehicleBrand[] = [];
  popularBrands: VehicleBrand[] = [];
  otherBrands: VehicleBrand[] = [];
  filteredBrands$!: Observable<VehicleBrand[]>;
   filteredPopularBrands$!: Observable<VehicleBrand[]>;
  filteredOtherBrands$!: Observable<VehicleBrand[]>;


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

  uploadProgress: { [key: string]: number } = {}; // clé = "photoIndex-fileIndex"
uploadedUrls: { [key: string]: string } = {};   // stocke les URLs finales

onFileChange(event: Event, photoIndex: number, fileIndex: number): void {
  const input = event.target as HTMLInputElement;
  console.log('ici '+photoIndex+ ' et '+fileIndex)
  if (input.files && input.files.length > 0) {
    const file = input.files[0];

    // démarre upload
    const key = `${photoIndex}-${fileIndex}`;
    this.vehicleService.uploadPhoto(1,file).subscribe({
      next: (val) => {
        if (typeof val === 'number') {
          // progression
          this.uploadProgress[key] = val;
        } else {
          // URL finale
          this.uploadedUrls[key] = val;
          this.uploadProgress[key] = 100;
        }
      },
      error: (err) => {
        console.error('Erreur upload', err);
        this.uploadProgress[key] = 0;
      }
    });
  }
}

  ngOnInit() {
  forkJoin({
    vehicleConf: this.vehicleService.getVehiclesConfiguration(),
    photoConf: this.vehicleService.getPhotosConfiguration()
  }).subscribe({
    next: ({ vehicleConf, photoConf }) => {
      this.vehicleConfiguration = vehicleConf;
      this.photoConfigs = photoConf;
      const specsArray = this.vehicleConfiguration.specifications.map(() => this.fb.control(false));
      this.addVehicleForm.setControl('specifications', this.fb.array(specsArray));
      this.initPhotos()
      this.addVehicleForm.setControl('photos', this.photosArray);
      this.allBrands = this.vehicleConfiguration.brands;
      this.popularBrands = this.allBrands.slice(0, 6);
      this.otherBrands = this.allBrands.slice(6);
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
           specifications: this.fb.array([]),
           photos: this.fb.array([])
         });

     this.filteredPopularBrands$ = this.addVehicleForm.get('brand')!.valueChanges.pipe(
    startWith(''),
      debounceTime(150),
      distinctUntilChanged(),
    map(value => this._filterBrands(this.popularBrands, value))
  );

  this.filteredOtherBrands$ = this.addVehicleForm.get('brand')!.valueChanges.pipe(
    startWith(''),
      debounceTime(150),
      distinctUntilChanged(),
    map(value => this._filterBrands(this.otherBrands, value))
  );

  this.addVehicleForm.get('brand')!.valueChanges.subscribe(brandId => {
    if (brandId != null) {
      this.vehicleService.getModelsByBrand(brandId!).subscribe({
      next: values => this.filteredModels.set(values)
    })
      this.addVehicleForm.get('model')!.setValue(null);
    } else {
      this.filteredModels.set([])
    }
  });

  }

  get specificationsArray(): FormArray {
    return this.addVehicleForm.get('specifications') as FormArray;
  }

  get photosArray(): FormArray {
    return this.addVehicleForm.get('photos') as FormArray;
  }

  private initPhotos(): void {
    this.photoConfigs.forEach(cfg => {
      const group = this.fb.group({
        type: [cfg.type],
        files: this.fb.array([])
      });

      // Ajout des inputs obligatoires
      for (let i = 0; i < cfg.min; i++) {
        (group.get('files') as FormArray).push(
          this.fb.control(null, Validators.required)
        );
      }

      this.photosArray.push(group);
    });
  }

  addOptionalFile(photoIndex: number): void {
    const cfg = this.photoConfigs[photoIndex];
    const filesArray = this.photosArray.at(photoIndex).get('files') as FormArray;
    if (filesArray.length < cfg.max) {
      filesArray.push(this.fb.control(null)); // pas required car optionnel
    }
  }

  /*onFileChange(event: Event, photoIndex: number, fileIndex: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const filesArray = this.photosArray.at(photoIndex).get('files') as FormArray;
      filesArray.at(fileIndex).setValue(file);
    }
  }*/

  getFilesArray(photoIndex: number): FormArray {
    return this.photosArray.at(photoIndex).get('files') as FormArray;
  }

  canAddMoreFiles(photoIndex: number): boolean {
    const filesArray = this.photosArray.at(photoIndex).get('files') as FormArray;
    return filesArray.length < this.photoConfigs[photoIndex].max;
  }

  // ajoute un input file optionnel pour le bloc photoIndex
  addFileInput(photoIndex: number): void {
    const cfg = this.photoConfigs[photoIndex];
    const filesArray = this.photosArray.at(photoIndex).get('files') as FormArray;

    // protection : n'ajoute pas au-delà du max
    if (filesArray.length >= cfg.max) {
      return;
    }

    // input optionnel -> pas de Validators.required
    filesArray.push(this.fb.control(null));
  }

// supprime un input file (ne supprime pas les inputs obligatoires index < min)
  removeFileInput(photoIndex: number, fileIndex: number): void {
    const cfg = this.photoConfigs[photoIndex];
    const filesArray = this.photosArray.at(photoIndex).get('files') as FormArray;

    // Empêcher la suppression d'un input obligatoire
    if (fileIndex < cfg.min) {
      console.warn('Cannot remove a required file input');
      return;
    }

    // protection : index valide
    if (fileIndex >= 0 && fileIndex < filesArray.length) {
      filesArray.removeAt(fileIndex);
    }
}

onSubmit() {
  if (this.addVehicleForm.invalid) return;

  const formValue = this.addVehicleForm.value;
  const selectedSpecifications = formValue.specifications
    .map((checked: boolean, i: number) =>
      checked ? this.vehicleConfiguration!.specifications[i].key : null
    )
    .filter((v: string | null) => v !== null);

  // récupérer toutes les URLs uploadées
  const photos: string[] = Object.values(this.uploadedUrls);

  const vehicleRequest: VehicleRequest = {
    ...formValue,
    specifications: selectedSpecifications,
    photos // ajoute les URLs finales
  };

  this.vehicleService.createVehicle(vehicleRequest).subscribe({
    next: (res) => console.log('Véhicule créé', res),
    error: (err) => console.error(err)
  });
}

  
private _filterBrands(brands: VehicleBrand[], value: string | number): VehicleBrand[] {
  const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
  return brands.filter(b => b.brandName.toLowerCase().includes(filterValue));
}

displayBrand = (id: number): string => {
  const brand = this.allBrands.find(b => b.id === id);
  return brand ? brand.brandName : '';
}
setSelectedBrand(value: number) {
  console.log(value)
}
}
