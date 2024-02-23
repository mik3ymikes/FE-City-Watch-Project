import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }


  getEvents(): Observable <Event[]>{
    return this.http.get<Event[]>(`${environment.apiUrl}/events`)
  }
}

