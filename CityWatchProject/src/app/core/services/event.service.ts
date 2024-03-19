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




  getEvents(page:number): Observable <Event[]>{
    return this.http.get<Event[]>(`${environment.apiUrl}/events?page=${page}`)
  }

  getEvent(id: string | number) {
    return this.http.get<Event>(`${environment.apiUrl}/events/${id}`);
  }


  createEvent(formData: FormData): Observable<Event> {

    return this.http.post<Event>(`${environment.apiUrl}/events`, formData);
  }

// iffy check on this
  updateEvent(id :string, formData:FormData){
    return this.http.patch<Event>(`/api/events/${id}`, formData);
  }


  joinEvent(eventId:number){
    return this.http.post(`${environment.apiUrl}/events/${eventId}/join`, {})
  }

  leaveEvent(eventId:number){
    return this.http.delete(`${environment.apiUrl}/events/${eventId}/leave`)
  }

}







// getEvents(): Observable <Event[]>{
//   return this.http.get<Event[]>(`${environment.apiUrl}/events`)
// }


// createEvent(event:Event){
  //   return this.http.post(`${environment.apiUrl}/events`, event);
    // }



  // may need to delete this for pages pagition
//   getEventsPage(page:number){
  //     return this.http.get<Event[]>(`${environment.apiUrl}/events?page=${page}`)
  // }






// couldnt get this below to work not sure why couldnt be type event??
  // createEvent(): Observable <Event>{
  //   return this.http.post<Event>(`${environment.apiUrl}/events`, {})
  // }


  // createEvent(eventData: any): Observable<Event> {
  //   return this.http.post<Event>(`${environment.apiUrl}/events`, eventData);
  // }
