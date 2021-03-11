import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMedicineEvent } from '../_models/IMedicineEvent';

@Injectable({
  providedIn: 'root'
})
export class MedicineEventService {
  baseUrl = environment.apiUrl + 'medicineevent/';

  constructor(private http: HttpClient) { }

 //koska taulussa on composite key, urleissa pitää olla sekä userId että lääkkeen id
  getUsedPortionTotalsByUserIdFlixotide(userId) {
    return this.http.get<IMedicineEvent>(`${this.baseUrl}${userId}/${1}`);
  }

  getUsedPortionTotalsByUserIdVentoline(userId) {
    return this.http.get<IMedicineEvent>(`${this.baseUrl}${userId}/${2}`);
  }

  resetFlixotideByUserId(flixEvent: IMedicineEvent) {
    const response = this.http.put(`${this.baseUrl}`, flixEvent).subscribe((data) => {
      return data;
    });
    return response;
  }

  resetVentolineByUserId(venEvent: IMedicineEvent) {
    const response = this.http.put(`${this.baseUrl}`, venEvent).subscribe((data) => {
      return data;
    });
    return response;
  }





}
