import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { User } from 'src/app/models/User';
@Injectable({
  providedIn: 'root'
})
export class ChefcenterService {


  constructor(private _http:HttpClient) { }

  AddChefCenter(user: User){
    return this._http.post<User>('https://localhost:44317/api/ChefCenter/AjoutChef',user);

  }

  deleteChefCenter(ChefCenterId:string): Observable<any> {
    return this._http.delete( 'https://localhost:44317/api/ChefCenter/DeleteChef?Id='+ChefCenterId);
  }

  getcurrentuser(id: string):Observable<any>{

    return this._http.get( 'https://localhost:44317/api/ChefCenter/GetChef?Id='+id);

  }
}