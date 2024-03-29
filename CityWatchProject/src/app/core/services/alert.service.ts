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

  getAlert(id: string | number) {
    return this.http.get<Alert>(`${environment.apiUrl}/alerts/${id}`);
  }

  updateAlert(alertId: string | number, formData:FormData){
    return this.http.patch<Alert>(`${environment.apiUrl}/alerts/${alertId}`, formData);
  }


  deleteAlert(alertId: string | number){
    return this.http.delete(`${environment.apiUrl}/alerts/${alertId}`)
  }


  createAlert(alertData: any): Observable<Alert> {
    return this.http.post<Alert>(`${environment.apiUrl}/alerts`, alertData);
  }


  addComment(alertId: string | number, commentData:Comment): Observable<Comment>{
    return this.http.post<Comment>(`${environment.apiUrl}/alerts/${alertId}/comments`, commentData);
  }



  // deleteComment(alertId: string | number): Observable<Comment>{
  //   return this.http.post<Comment>(`${environment.apiUrl}/alerts/${alertId}/comments/${commentId});
  // }

  // DELETE	/alerts/:alert_id/comments/:id(.:format)
  // comments#destroy

  // getComments(alertId: string | number): Observable<any[]> {
  //   return this.http.get<any[]>(`${environment.apiUrl}/alerts/${alertId}/comments`);
  // }

}
