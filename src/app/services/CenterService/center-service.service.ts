import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

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

  antenna(antennaId:string): Observable<any> { 
    return this.http.get('https://localhost:44357/api/Antenna/GetAntenna?Id='+antennaId );
  }
}
