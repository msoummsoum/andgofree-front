import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { VehicleDTO } from '../../shared/backDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
    private apiUrl = `${environment.apiUrl}/vehicles/list`;

    constructor(private http: HttpClient) {}

    getVehicles(): Observable<VehicleDTO[]> {
      return this.http.get<VehicleDTO[]>(this.apiUrl);
    }

    createVehicle(vehicle: VehicleDTO): Observable<VehicleDTO> {
      return this.http.post<VehicleDTO>(this.apiUrl, vehicle);
    }
}
