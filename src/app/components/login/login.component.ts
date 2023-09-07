import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { AuthLoginInfo } from 'src/app/models/login-info';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any={};
  currentUser!: User;
  isLoginFailed =false;
  errorMessage = '';

  constructor(private authService: AuthService, private toastr: ToastrService,private router: Router,private ts:TokenStorageService) { }

login(){
 

    this.authService.login(new AuthLoginInfo(this.form.username, this.form.password))

    .subscribe(

          (data:any) =>{
          
            this.isLoginFailed = false;
            const id=this.ts.getId()+"";
          this.authService.getcurrentuser(id).subscribe((data:any) =>{
              this.currentUser = data;
          AppComponent.instance.setCurrentUser(this.currentUser)
         // console.log(this.currentUser)
            this.router.navigate(['/']);
            this.toastr.success("welcome");
if( this.authService.getRoles() == "ADMIN")
{
  this.router.navigate(['/userstats']);

}
else 
if( this.authService.getRoles() == "CHEF_CENTRE")
{
  this.router.navigate(['/centerstats']);

}

          },
          (error:any) => {
            this.isLoginFailed = true;

          }
    )

},
(error:any) => {
  this.errorMessage = error.error.message;
  this.toastr.error("verifier vos credatials");

  this.isLoginFailed = true;
}
    )

}


getcurrentuser(){
const id=this.ts.getId()+"";
this.authService.getcurrentuser(id,).subscribe((r:any)=>{
  //console.log(r);
},(error:any) => console.log(error));

}

  ngOnInit(): void {
  }



}


