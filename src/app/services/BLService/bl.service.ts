import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BLService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allBLs():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/BL/GetBLs');

  }
}
