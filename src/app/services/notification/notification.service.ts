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

  list(userId:number): Observable<any> {
    return this.http.get(this.baseUrl + 'getNotificationsByUser/'+userId);
  }

  getNotfiById(notifId: number): Observable<any> {
    return this.http.get(this.baseUrl+'getNotfiById/'+notifId);
  }

  updateNotif(notif: NotificationForum) : Observable<any>{
    return this.http.post(this.baseUrl+'updateNotif',notif);
  }

  deleteNotif(notifId: number) : Observable<any>{
    return this.http.delete(this.baseUrl+'deleteNotif/'+notifId);
  }

}
