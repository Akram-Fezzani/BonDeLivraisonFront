import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  private baseURL = "http://localhost:8085/password/";

  constructor(private _http:HttpClient) { }

  reset(id:String,password: string){
    return this._http.put("https://localhost:44317/api/User/UpdatePassword?Id="+id+"&password="+ password,{responseType:'text'});
  }
}