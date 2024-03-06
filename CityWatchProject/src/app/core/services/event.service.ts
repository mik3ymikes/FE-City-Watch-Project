import { HttpClient } from '@angular/common/http';
import { Event } from '../../shared/models/event';
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



  createEvent(): Observable <Event>{
    return this.http.post<Event>(`${environment.apiUrl}/events`,{})
  }


  // createEvent(Event:Event){
  //   return this.http.post(`${environment.apiUrl}/events`, event)
  // }




  // may need to delete this for pages pagition
//   getEventsPage(page:number){
//     return this.http.get<Event[]>(`${environment.apiUrl}/events?page=${page}`)
// }

}
