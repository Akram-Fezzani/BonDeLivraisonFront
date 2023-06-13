import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { collector } from 'src/app/models/collector';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/registerservice/register.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-collector',
  templateUrl: './add-collector.component.html',
  styleUrls: ['./add-collector.component.scss']
})
export class AddCollectorComponent implements OnInit {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  collector: collector=new collector();
  disableButton: boolean = false;

  constructor(private router:Router,private us:UserService, private _router:Router) { }
  


  AddCollector(){
    this.disableButton = true;
    this.us.addcollector(this.collector).subscribe( (data:any) =>{
      console.log(data);
      data.state=true;
      //data.centreId=
      //data.center=  
        if(data.message == "success") {
          this.disableButton = false;
          this.router.navigate(['/login'])
      .then(() => {
        window.location.reload();
      });
        }

      },
      (error:any) => console.log(error));  }






  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
