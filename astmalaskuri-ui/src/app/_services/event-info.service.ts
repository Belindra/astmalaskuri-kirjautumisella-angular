import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEventInfo } from 'src/app/_models/IEventInfo';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventInfoService {
  baseUrl = environment.apiUrl + 'eventinfo/';

  constructor(private http: HttpClient) { }

  private handleError<T>(result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error); //
      // jos id:llä ei löydy eventtiä, appi ei kaadu vaan kerrotaan konsolissa
      return of(result as T);
    };
  }

  //sekä Flixotiden että Ventolinen käyttötapahtumat haetaan samasta paikasta, ja ne filtteröidään lääkkeen id:n perusteella viimeksi-kaytetyt.ts:ssä
  getMedUseEvents(): Observable<IEventInfo[]> {
    return this.http.get<IEventInfo[]>(this.baseUrl);
  }

   // nyt pitäis löydää id:llä eventti. tap kertoo, jos löytyi, ja catcherror kertoo, jos ei löytynyt
   //tapin idea on, että se välitetään observablena se tieto, mitä getillä piti, ja LISÄKSI tap
   //"tekee siihen vielä lisätiedon", tässä tapauksessa console.log
   getEvent(id: number): Observable<IEventInfo> {
    return this.http.get(`${this.baseUrl}${id}`).pipe(
      tap( tapahtuma => (console.log("eventti löytyi")) ),
      catchError(this.handleError<any>())
    );
  }

  useFlixotide(newInfo: IEventInfo): any {
    const response = this.http.post(`${this.baseUrl}`, newInfo).subscribe((data) => {
      return data;
    });
    return response;
  }
  useVentoline(newInfo: IEventInfo): any {
    const response = this.http.post(`${this.baseUrl}`, newInfo).subscribe((data) => {
      return data;
    });
    return response;
  }
}
