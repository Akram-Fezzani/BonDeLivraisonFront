import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Observable,Subject } from 'rxjs';
import { collector } from 'src/app/models/collector';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = '/https://localhost:44317/api/User/';
  private getCenterUrl =  'https://localhost:44357/api/Center'


  constructor(private http: HttpClient, private _http:HttpClient) { }


  getUserById(userId:string): Observable<any> { 
    return this.http.get( 'https://localhost:44317/api/User/getUserById?Id='+userId);
  }

  getUserByusername(username:string): Observable<any> { 
    return this.http.get(this.baseUrl + 'getUserByusername/'+username);
  }

  

  getnumberofusers(): Observable<any> { 
    return this.http.get( 'https://localhost:44317/api/User/GetNumberOfUsers');
  }

  getnumberofactiveusers(): Observable<any> { 
    return this.http.get( 'https://localhost:44317/api/User/GetNumberOfActiveUsers');
  }

  getnumberofchefs(): Observable<any> { 
    return this.http.get( 'https://localhost:44317/api/ChefCenter/GetNumberOfChefCenters');
  }

  getnumberofadmins(): Observable<any> { 
    return this.http.get( 'https://localhost:44317/api/User/GetNumberOfAdmins');
  }
  getCenter(CenterId:string): Observable<any> { 
    return this.http.get(this.getCenterUrl+'/GetCentre?Id=' +CenterId);
  }



  addcollector(collector: collector){
    return this._http.post<collector>('https://localhost:44357/api/Collector/AjoutCollecteur',collector);

  }

  

  

  private _listners = new Subject<any>();
  listen():Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }










}
