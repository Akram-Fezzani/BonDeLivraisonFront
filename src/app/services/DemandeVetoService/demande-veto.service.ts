import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandeVetoService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getDemandeVeto():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Antenna/GetDemandeByAntennaId?IdAntenna=');

  }
  getDemandeVetoByCenter(CenterId:String):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Center/GetDemandeVetoByCenterId?IdCenter='+CenterId);

  }
}
