import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Center } from 'src/app/models/Center';
import { collector } from 'src/app/models/collector';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss']
})
export class AddCenterComponent implements OnInit {

  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  focus3!:any;
  focus4!:any;
  focus5!:any;
  focus6!:any;
  focus7!:any;

  collector: collector=new collector();
  center: Center=new Center();

  disableButton: boolean = false;

  constructor(private router:Router,private CentreService:CenterServiceService,private toastr: ToastrService,private us:UserService, private _router:Router,private dialogRef: MatDialogRef<AddCenterComponent>) { }
  


  AddCenter(){
    this.disableButton = true;
    this.CentreService.AddCenter(this.center,).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog()
      this.toastr.success("Un Centre a été Ajouter");

      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
      }
      


  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  
}
