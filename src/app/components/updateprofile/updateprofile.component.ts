import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { ProfilepageComponent } from '../profilepage/profilepage.component';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {
  user!: User;
  constructor(private as:AuthService,private toastr: ToastrService, private router: Router,private ts:TokenStorageService) { }

  ngOnInit(): void {
    this.user={...AppComponent.instance.getCurrentUser()};
    console.log(this.user);
  }
  updateuser(){
    this.as.updateuser(this.user).subscribe((r:any)=>{
        console.log(r);
        this.toastr.success("votre compte est bien modifié ");

      },(error:any) =>{ console.log(error)
      this.toastr.error("Mise a jours ecouée");

      });
  }


  cancelUpdate() {
    this.user = ProfilepageComponent.instance.currentUser;
    ProfilepageComponent.instance.showUpdateProfile = false;
  }
}
