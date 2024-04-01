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


  updateEvent(eventId: string | number, formData:FormData){
    return this.http.patch<Event>(`${environment.apiUrl}/events/${eventId}`, formData);
  }

//double check this
  deleteEvent(eventId: string | number){
    return this.http.delete(`${environment.apiUrl}/events/${eventId}`)
  }


  joinEvent(eventId:number){
    return this.http.post(`${environment.apiUrl}/events/${eventId}/join`, {})
  }

  leaveEvent(eventId:number){
    return this.http.delete(`${environment.apiUrl}/events/${eventId}/leave`)
  }


  addComment(eventId: string | number, commentData:Comment): Observable<Comment>{
    return this.http.post<Comment>(`${environment.apiUrl}/events/${eventId}/comments`, commentData);
  }



  deleteComment(eventId: string | number, commentId: string | number): Observable<Comment>{
    return this.http.delete<Comment>(`${environment.apiUrl}/events/${eventId}/comments/${commentId}`);
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
