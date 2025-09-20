import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { PhotoTypeConfigResponse, VehicleConfigurationResponse, VehicleModelResponse, VehicleRequest, PhotoType } from '../../shared/backDto';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    private apiUrl = `${environment.apiUrl}/vehicles`;
    private apiUrlConfig = `${environment.apiUrl}/config/vehicles`;
    private apiUrlConfigPhotos = `${environment.apiUrl}/config/photos`;
    private apiUrlPhoto = `${environment.apiUrl}/photos/vehicles`;

    constructor(private http: HttpClient) {}

    getVehicles(): Observable<VehicleRequest[]> {
      return this.http.get<VehicleRequest[]>(this.apiUrl);
    }

    createVehicle(vehicle: VehicleRequest): Observable<VehicleRequest> {
      return this.http.post<VehicleRequest>(this.apiUrl, vehicle);
    }

    getVehiclesConfiguration(): Observable<VehicleConfigurationResponse> {
      return this.http.get<VehicleConfigurationResponse>(this.apiUrlConfig);
    }
    
    getPhotosConfiguration(): Observable<PhotoTypeConfigResponse[]> {
      return this.http.get<PhotoTypeConfigResponse[]>(`${this.apiUrlConfigPhotos}`);
    }

    getModelsByBrand(modelId: number): Observable<VehicleModelResponse[]> {
        return this.http.get<VehicleModelResponse[]>(`${this.apiUrlConfig}/${modelId}/models`);
    }

    uploadPhoto(vehicleId: number, file: File): Observable<number | string> {
  const formData = new FormData();
   formData.append('file', file);
  formData.append('description', 'description');
  formData.append('type', 'VEHICLE_COVER');

  return this.http.post<{ url: string }>(
    `${this.apiUrlPhoto}/${vehicleId}`,
    formData,
    {
      reportProgress: true,
      observe: 'events'
    }
  ).pipe(
    map(event => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          return Math.round((100 * event.loaded) / (event.total ?? 1));
        case HttpEventType.Response:
          return event.body!.url; // l’URL finale
        default:
          return 0;
      }
    })
  );
}

}
