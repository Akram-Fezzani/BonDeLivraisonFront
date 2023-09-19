import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BL } from 'src/app/models/BL';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BLService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allBLs():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/BL/GetBLs');

  }

  AddBL(BL:BL ){
    return this._http.post<BL>('https://localhost:44358/api/BL/AjoutBL',BL);
  }
  deleteBL(BLId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44358/api/BL/DeleteBL?Id='+BLId);
  }

  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
