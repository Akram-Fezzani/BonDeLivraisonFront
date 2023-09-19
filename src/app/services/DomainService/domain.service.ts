import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import { Domain } from 'src/app/models/Domain';
@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getDomains():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Domaine/GetDomaines');

  }

  AddDomain(Domain: Domain){
    return this._http.post<Domain>('https://localhost:44357/api/Domaine/AjoutDomaine',Domain);

  }

  deleteDomain(DomainId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Domaine/DeleteDomaine?Id='+DomainId);
  }
  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}