import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { Vehicule } from 'src/app/models/Vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {


  constructor(private http: HttpClient, private _http:HttpClient) { }

  getVehicules():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/Vehicule/GetVehicules');

  }

  AddVehicule(Vehicule: Vehicule){
    return this._http.post<Vehicule>('https://localhost:44358/api/Vehicule/AjoutVehicule',Vehicule);

  }

  deleteVehicule(VehiculeId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44358/api/Vehicule/DeleteVehicule?Id='+VehiculeId);
  }

}