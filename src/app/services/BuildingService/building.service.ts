import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from 'src/app/models/Building';
@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allBuildings():Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Building/GetBatiments');

  }

  GetBuldingsByCenterId(CenterId:string):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Building/GetBuldingsByCenterId?IdCenter='+CenterId);

  }

  AddBuilding(Building:Building ){
    return this._http.post<Building>('https://localhost:44357/api/Building/AjoutBatiment',Building);
  }
  
  deleteBuilding(BuildingId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44357/api/Building/DeleteBatiment?Id='+BuildingId);
  }

  GetBuldingsByAntennaId(AntennaId:string):Observable<any>{

    return this.http.get( 'https://localhost:44357/api/Antenna/GetBuildingsByAntennaId?IdAntenna='+AntennaId);

  }
}
