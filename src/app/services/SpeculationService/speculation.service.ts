import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Speculation } from 'src/app/models/Speculation';

@Injectable({
  providedIn: 'root'
})
export class SpeculationService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getSpeculations():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Speculation/GetSpeculations');

  }

  AddRole(role: Speculation){
    return this._http.post<Speculation>('https://localhost:44317/api/Role/AjoutRole',role);

  }

  deleteSpeculation(SpeculationId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Speculation/DeleteSpeculation?Id='+SpeculationId);
  }}
