import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import { Chauffeur } from 'src/app/models/Chauffeur';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {


  constructor(private http: HttpClient, private _http:HttpClient) { }

  getChauffeurs():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/Chauffeur/GetChauffeurs');

  }

  AddChauffeur(Chauffeur: Chauffeur){
    return this._http.post<Chauffeur>('https://localhost:44358/api/Chauffeur/AjoutChauffeur',Chauffeur);

  }

  deleteChauffeur(ChauffeurId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44358/api/Chauffeur/DeleteChauffeur?Id='+ChauffeurId);
  }

}