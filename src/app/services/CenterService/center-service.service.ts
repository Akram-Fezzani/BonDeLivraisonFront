import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
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


  BuildingByCenter(): Observable<any> {
    return this.http.get('https://localhost:44357/api/Building/GetBuildingsByCenter');
  }
}
