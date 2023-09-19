import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import { Speculation } from 'src/app/models/Speculation';

@Injectable({
  providedIn: 'root'
})
export class SpeculationService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  getSpeculations():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Speculation/GetSpeculations');

  }

  AddSpeculation(Speculation: Speculation){
    return this._http.post<Speculation>('https://localhost:44357/api/Speculation/AjoutSpeculation',Speculation);

  }

  deleteSpeculation(SpeculationId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Speculation/DeleteSpeculation?Id='+SpeculationId);
  }
  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
