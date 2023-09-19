import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
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

  deleteRole(RoleId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44317/api/Role/DeleteRole?Id='+RoleId);
  }
  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
