import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Speculation } from 'src/app/models/Speculation';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getTypes():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Type/GetTypes');

  }

  AddRole(role: Speculation){
    return this._http.post<Speculation>('https://localhost:44317/api/Role/AjoutRole',role);

  }

  deleteType(TypeId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Type/DeleteType?Id='+TypeId);
  }

}
