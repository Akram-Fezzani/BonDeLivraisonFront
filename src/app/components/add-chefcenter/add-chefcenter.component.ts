import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
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
  user: User=new User();
  disableButton: boolean = false;

  constructor(private router:Router,private ChefCenterService:ChefcenterService, private toastr: ToastrService,private _router:Router,private dialogRef: MatDialogRef<AddChefcenterComponent>) { }
  


  AddUser(){

    this.user.roleId ="3fa85f64-5717-4562-b3fc-2c963f66afa6";
    console.log(this.user);

    this.disableButton = true;
    this.ChefCenterService.AddChefCenter(this.user).subscribe( (data:any) =>{
      console.log(data);
      this.closeDialog();
      this.toastr.error("Un Chef Centre a été Ajouter");


      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
      }
      


  ngOnInit() {
  
  }
}
