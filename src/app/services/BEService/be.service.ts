import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BEService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allBes():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/BE/GetBEs');

  }

  deleteBE(BEId:string): Observable<any> {
    return this.http.delete( '  https://localhost:44358/api/BE/DeleteBE?Id='+BEId);
  }
}
