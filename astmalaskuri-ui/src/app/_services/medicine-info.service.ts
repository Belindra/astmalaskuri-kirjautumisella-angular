import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineInfoService {
  baseUrl = environment.apiUrl + 'medicineinfo/';

  constructor(private http: HttpClient) { }

  getFlixotide() {
    return this.http.get(this.baseUrl + '1');
  }

  getVentoline() {
    return this.http.get(this.baseUrl + '2');
  }

}
