import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Speculation } from 'src/app/models/Speculation';
@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getDomains():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Domaine/GetDomaines');

  }

  AddRole(role: Speculation){
    return this._http.post<Speculation>('https://localhost:44317/api/Role/AjoutRole',role);

  }

  deleteDomain(DomainId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Domaine/DeleteDomaine?Id='+DomainId);
  }

}