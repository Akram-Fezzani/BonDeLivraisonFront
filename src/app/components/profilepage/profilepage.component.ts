import { Component, OnInit, OnDestroy } from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { AuthService } from "src/app/services/authservice/auth.service";
import {User} from "../../models/User";
import {AppComponent} from "../../app.component";
import {UserService} from "../../services/user/user.service";
import { TokenStorageService } from "src/app/services/tokenstorageservice/token-storage.service";


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
  isCollapsed = true;
  currentUser: any;
  user!: User;

  static instance: ProfilepageComponent;

  showUpdateProfile: boolean = false;
  loading: boolean = true;
  loggedUser: User = new User();
  constructor(private userService: UserService,private ts:TokenStorageService,private activatedRoute:ActivatedRoute,private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user={...AppComponent.instance.getCurrentUser()};
    console.log(this.user);
    this.setUser() 
 
    if(AppComponent.instance.getCurrentUser() != null) {
      this.loggedUser.UserId = AppComponent.instance.getCurrentUser().UserId;
    }
    ProfilepageComponent.instance = this;
    this.setUser();
    this.router.events.subscribe((event) => {
        this.setUser();
      });
    }
  setUser() {
      this.loading = true;
      const id=this.ts.getId()+"";
      console.log(id)
      this.userService.getUserById(id).subscribe((r:User) => {
      this.currentUser = r ;
      console.log(this.currentUser)
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("profile-page");
    
    },error => console.log(error));
  }
  
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  signOut() {
  
    this.goToHome();
    this.router.navigate(['/login'])

    this.ts.clearLocalStorage();  }

    goToHome() {
      this.router.navigate(['/'])
        .then(() => {
          window.location.reload();
        });
    }
 


}
