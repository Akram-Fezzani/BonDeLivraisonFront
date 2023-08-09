import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  
}
