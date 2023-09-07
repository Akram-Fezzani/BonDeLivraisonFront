import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResetService } from 'src/app/services/resetservice/reset.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { ProfilepageComponent } from '../profilepage/profilepage.component';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  form: any={};
user:any;

  constructor(private ResetService:ResetService,private tokenStorage:TokenStorageService, private toastr: ToastrService,private router: Router,private ts:TokenStorageService) { }

reset(){
  if(this.form.password == this.form.confirmpassword){
  const id=this.ts.getId()+"";
  //console.log(id);
    this.ResetService.reset(id,this.form.password).subscribe((r:any)=>{
      //console.log(r);
      this.toastr.success("votre mot de passe est bien modifié ");
this.signOut();
    },(error:any) => {
    console.log(error)
    this.toastr.error("Les mots de passe ne sont pas compatible");
    });
  }else{
    this.toastr.error("Les mots de passe ne sont pas compatible");

  }

}

goToHome() {
  this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
}

signOut() {
  
  this.goToHome();
  this.router.navigate(['/login'])

  this.tokenStorage.clearLocalStorage();  }
  ngOnInit(): void {
  }

  cancelUpdate() {
    this.user = ProfilepageComponent.instance.currentUser;
    ProfilepageComponent.instance.showUpdateProfile = false;
    this.router.navigate(['/profile'])

  }
}

