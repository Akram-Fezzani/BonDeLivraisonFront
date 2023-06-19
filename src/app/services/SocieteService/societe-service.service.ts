import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Societe } from 'src/app/models/Societe';
@Injectable({
  providedIn: 'root'
})
export class SocieteServiceService {

  constructor(private http: HttpClient, private _http:HttpClient) { }



  getSocietes():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Society/GetSocietes');

  }
  addSociete(societe: Societe){
    return this._http.post<Societe>('https://localhost:44357/api/Society/AjoutSociete',societe);

  }


  deleteSociete(SocieteId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Society/DeleteSociete?Id='+SocieteId);
  }
}
