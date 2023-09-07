import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Speculation } from 'src/app/models/Speculation';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  //userstats charts
  GetCenterByAntenna(): Observable<any> {
    return this.http.get('https://localhost:44357/api/Antenna/GetCenterByAntenna');
  }

  BuildingByCenter(): Observable<any> {
    return this.http.get('https://localhost:44357/api/Building/GetBuildingsByCenter');
  }

  getUserPostStats(): Observable<any> {
    return this.http.get('https://localhost:44317/api/User/GetUserStats');
  }

    //antennaStats charts


  BuildingByCenterByAntennaId(AntennaId:string): Observable<any> {
    return this.http.get('https://localhost:44357/api/Antenna/GetBuildingsByCenter?IdAntenna='+AntennaId);
  }


  //CenterStats

  GetBeByStateByCenter(CenterId:string): Observable<any> {
    return this.http.get('https://localhost:44358/api/BE/GetBeByStateByCenter?centerId='+CenterId);
  }

  GetBlByStateByCenter(CenterId:string): Observable<any> {
    return this.http.get('https://localhost:44358/api/BL/GetBeByStateByCenter?centerId='+CenterId);
  }

  GetCommandByClients(): Observable<any> {
    return this.http.get('  https://localhost:44358/api/Client/GetCammandByClient');
  }
}