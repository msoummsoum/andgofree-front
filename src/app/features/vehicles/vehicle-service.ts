import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VehicleConfigurationResponse, VehicleDTO } from '../../shared/backDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    private apiUrl = `${environment.apiUrl}/vehicles/list`;
    private apiUrlConfig = `${environment.apiUrl}/config/vehicles`;

    constructor(private http: HttpClient) {}

    getVehicles(): Observable<VehicleDTO[]> {
      return this.http.get<VehicleDTO[]>(this.apiUrl);
    }

    createVehicle(vehicle: VehicleDTO): Observable<VehicleDTO> {
      return this.http.post<VehicleDTO>(this.apiUrl, vehicle);
    }

    getVehiclesConfiguration(): Observable<VehicleConfigurationResponse> {
      return this.http.get<VehicleConfigurationResponse>(this.apiUrlConfig);
    }
    
}
