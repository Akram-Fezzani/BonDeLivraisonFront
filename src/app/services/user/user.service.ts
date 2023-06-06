import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/https://localhost:44317/api/User/';

  constructor(private http: HttpClient) { }


  getUserById(userId:string): Observable<any> { 
    return this.http.get(this.baseUrl + 'getUserById/'+userId);
  }

  getUserByusername(username:string): Observable<any> { 
    return this.http.get(this.baseUrl + 'getUserByusername/'+username);
  }


  getnumberofusers(): Observable<any> { 
    return this.http.get(this.baseUrl + 'numberofusers');
  }

  getnumberofactiveusers(): Observable<any> { 
    return this.http.get(this.baseUrl + 'numberofactiveusers');
  }

  getUserPostStats(): Observable<any> {
    return this.http.get(this.baseUrl + 'displayChart');
  }

}
