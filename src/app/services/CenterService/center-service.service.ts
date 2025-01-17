import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import { Center } from 'src/app/models/Center';

@Injectable({
  providedIn: 'root'
})
export class CenterServiceService {

  private baseUrl = 'https://localhost:44357/api/Center/GetCentre?Id=';


  constructor(private http: HttpClient) { }


  
  getCenter(CenterId:string): Observable<any> { 
    return this.http.get(this.baseUrl +CenterId);
  }


  getnumberofcollectors(CenterId:string): Observable<any> { 
    return this.http.get( 'https://localhost:44357/api/Collector/GetNumberOfCollectorsByCenter?id='+CenterId);
  }


  collectors(): Observable<any> { 
    return this.http.get('https://localhost:44357/api/Collector/GetCollecteurs' );
  }



  allcenters(): Observable<any> { 
    return this.http.get('https://localhost:44357/api/Center/GetCentres' );
  }
 

  AddCenter(center: Center){
    return this.http.post<Center>('https://localhost:44357/api/Center/AjoutCentre',center);

  }

  deleteCenter(CenterId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Center/DeleteCentre?Id='+CenterId);
  }


 

 
  getCollectorsByCenter(CenterId:String):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Collector/GetCollectorsByCenterId?IdCenter='+CenterId);

  }

  getCenterByAntenna(AntennaId:String):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Antenna/GetCentersByAntennaId?IdAntenna='+AntennaId);

  }

  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }
}
