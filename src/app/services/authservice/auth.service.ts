import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthLoginInfo } from '../../models/login-info';
import { JwtResponse } from '../../models/jwt-response';
import { Router } from '@angular/router';
import { TokenStorageService } from '../tokenstorageservice/token-storage.service';
import { User } from 'src/app/models/User';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  username: any={};
  password: any={};

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

TOKEN_KEY = 'AuthToken';


private roles:string = "";
private currentUserSubject : BehaviorSubject<any>;
public currentUser :Observable<any>;
private loginUrl = 'https://localhost:44317/api/User/Login?Username='
;

constructor(private http: HttpClient ,  private tokenStorage: TokenStorageService,private router:Router){
  this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(this.TOKEN_KEY));
  this.currentUser=this.currentUserSubject.asObservable();
}

public get currentUserValue():any{
  return this.currentUserSubject.value;
}


  login(LoginInfo :AuthLoginInfo){
    this.username=LoginInfo.username;
    this.password=LoginInfo.password;
    return this.http.post<JwtResponse>('https://localhost:44317/api/User/Login?Username=' +this.username+'&Password='+this.password,AuthLoginInfo)

    .pipe(map((data:any) => {
this.saveUserData(data);
return data;
    },(error:any) => {console.log(error)}) )
  }

  private saveUserData(data:any){

    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveId(data.id);
    this.tokenStorage.saveUsername(data.username);
    this.tokenStorage.saveAuthorities(data.roles);
  }






  public clear() {
    localStorage.clear();
  }

  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  public getRoles(): string {
    return this.tokenStorage.getAuthorities()+"";
  }
  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

    logout() {

      this.tokenStorage.saveToken("");
      this.tokenStorage.saveUsername("");
      this.tokenStorage.saveAuthorities("");
}

getcurrentuser(id: string):Observable<any>{

    return this.http.get( 'https://localhost:44317/api/User/getUserById?Id='+id);

  }

  updateuser(user: User,id:String):Observable<any>{

    return this.http.post( 'http://localhost:8085/user/updateUser/'+id,user);

  }
}

