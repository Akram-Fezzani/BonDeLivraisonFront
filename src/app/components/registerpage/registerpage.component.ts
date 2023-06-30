import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/User";
import { RegisterService } from "src/app/services/registerservice/register.service";



@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  focus3!:any;
  focus4!:any;
  focus5!:any;
  focus6!:any;

  user: User=new User();
  disableButton: boolean = false;

  constructor(private router:Router,private us:RegisterService, private _router:Router) { }
  


  AddUser(){
    this.user.roleId ="3fa85f64-5717-4562-b3fc-2c963f66afa6";
    this.disableButton = true;
    this.us.AddUser(this.user).subscribe( (data:any) =>{
      console.log(data);
        if(data.message == "success") {
          this.router.navigate(['login'])
      .then(() => {
        window.location.reload();
      });
        }

      },
      (error:any) => console.log(error)
      
      );  }






  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
