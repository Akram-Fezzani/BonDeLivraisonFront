import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NotificationForum} from "../../models/NotificationForum";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl =  '/notification/';

  constructor(private http: HttpClient) { }

  Notiflist(userId:String): Observable<any> {
    return this.http.get('https://localhost:44317/api/Notification/GetNotificationByUser?Id='+userId);
  }

  getNotfiById(notifId: number): Observable<any> {
    return this.http.get(this.baseUrl+'getNotfiById/'+notifId);
  }

  updateNotif(notif: NotificationForum) : Observable<any>{
    return this.http.post(this.baseUrl+'updateNotif',notif);
  }

  deleteNotif(notifId: String) : Observable<any>{
    return this.http.delete('https://localhost:44317/api/Notification/DeleteNotification?Id='+notifId);
  }

}
