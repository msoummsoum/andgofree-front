import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PhotoTypeConfigResponse, VehicleConfigurationResponse, VehicleModelResponse, VehicleRequest } from '../../shared/backDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    private apiUrl = `${environment.apiUrl}/vehicles`;
    private apiUrlConfig = `${environment.apiUrl}/config/vehicles`;
    private apiUrlConfigPhotos = `${environment.apiUrl}/config/photos`;

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
}
