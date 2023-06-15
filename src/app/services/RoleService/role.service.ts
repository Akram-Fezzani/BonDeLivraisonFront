import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Role } from 'src/app/models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getRoles():Observable<any>{

    return this.http.get( 'https://localhost:44317/api/Role/GetRoles');

  }

  AddRole(role: Role){
    return this._http.post<Role>('https://localhost:44317/api/Role/AjoutRole',role);

  }
}