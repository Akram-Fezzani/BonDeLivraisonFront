import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { User } from 'src/app/models/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "https://localhost:44317/api/User/AjoutUser";

  constructor(private _http:HttpClient) { }

  AddUser(user: User){
    return this._http.post<User>(this.baseURL,user);

  }


}
