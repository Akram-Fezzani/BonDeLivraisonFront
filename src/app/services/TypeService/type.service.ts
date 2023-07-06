import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Type } from 'src/app/models/Type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getTypes():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Type/GetTypes');

  }

  AddType(type: Type){
    return this._http.post<Type>('https://localhost:44357/api/Type/AjoutType',type);

  }

  deleteType(TypeId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Type/DeleteType?Id='+TypeId);
  }

}
