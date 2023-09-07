import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { ChefcenterService } from 'src/app/services/ChefCenterService/chefcenter.service';
import { RegisterService } from 'src/app/services/registerservice/register.service';

@Component({
  selector: 'app-add-chefcenter',
  templateUrl: './add-chefcenter.component.html',
  styleUrls: ['./add-chefcenter.component.scss']
})
export class AddChefcenterComponent implements OnInit {

 
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  focus3!:any;
  focus4!:any;
  focus5!:any;
  user: User=new User();
  centers:any;
  disableButton: boolean = false;

  constructor(private router:Router,private cs:CenterServiceService,private ChefCenterService:ChefcenterService, private toastr: ToastrService,private _router:Router,private dialogRef: MatDialogRef<AddChefcenterComponent>) { }
  
  getallcenters(){
        
    this.cs.allcenters().subscribe( (data:any) =>{

      this.centers=data;

      },
      (error:any) => console.log(error));  }

  AddChef(){

    this.user.roleId ="3fa85f64-5717-4562-b3fc-2c963f66afa6";
    //console.log(this.user);

    this.disableButton = true;
    this.ChefCenterService.AddChefCenter(this.user).subscribe( (data:any) =>{
      //console.log(data);
      this.closeDialog();
      this.toastr.error("Un Chef Centre a été Ajouter");


      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
      }
      


  ngOnInit() {
  this.getallcenters()
  }
}
