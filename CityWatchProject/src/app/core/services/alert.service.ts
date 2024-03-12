import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Alert } from '../../shared/models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http:HttpClient) { }



  getAlerts(page:number): Observable <Alert[]>{
    return this.http.get<Alert[]>(`${environment.apiUrl}/alerts?page=${page}`)
  }



  // getTimeLineAlerts(): Observable <Alert[]>{
  //  return this.http.get<Alert[]>(`${environment.apiUrl}/alerts`)
  // }




  createAlert(alertData: any): Observable<Alert> {
    return this.http.post<Alert>(`${environment.apiUrl}/alerts`, alertData);
  }

}
