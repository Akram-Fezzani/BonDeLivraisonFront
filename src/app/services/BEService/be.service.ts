import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BE } from 'src/app/models/BE';

@Injectable({
  providedIn: 'root'
})
export class BEService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allBes():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/BE/GetBEs');

  }

  AddBE(BE:BE ){
    return this._http.post<BE>('https://localhost:44358/api/BE/AjoutBE',BE);
  }

  deleteBE(BEId:string): Observable<any> {
    return this.http.delete( '  https://localhost:44358/api/BE/DeleteBE?Id='+BEId);
  }
}
