import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VehicleConfigurationResponse, VehicleRequest } from '../../shared/backDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    private apiUrl = `${environment.apiUrl}/vehicles`;
    private apiUrlConfig = `${environment.apiUrl}/config/vehicles`;

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
    
}
