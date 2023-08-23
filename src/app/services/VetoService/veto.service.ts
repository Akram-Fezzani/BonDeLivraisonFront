import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class VetoService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getVetoByAntenna(AntennaId:string):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Antenna/GetVetoByAntennaId?IdAntenna='+AntennaId);

  }
}
