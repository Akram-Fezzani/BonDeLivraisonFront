import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Antenne } from 'src/app/models/Antenne';

@Injectable({
  providedIn: 'root'
})
export class AntenneService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allantenna(): Observable<any> { 
    return this.http.get('https://localhost:44357/api/Antenna/Get Antennas' );
  }

  AddAntenne(antenne: Antenne){
    return this._http.post<Antenne>('https://localhost:44357/api/Antenna/AjoutAntenna',antenne);

  }
  antenna(antennaId:string): Observable<any> { 
    return this.http.get('https://localhost:44357/api/Antenna/GetAntenna?Id='+antennaId );
  }

  deleteAntenna(antennaId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Antenna/DeleteAntenna?Id='+antennaId);
  }


  getCollectorsByAntenna(AntennaId:string):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Antenna/GetCollectorsByAntennaId?IdAntenna='+AntennaId);

  }
  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
