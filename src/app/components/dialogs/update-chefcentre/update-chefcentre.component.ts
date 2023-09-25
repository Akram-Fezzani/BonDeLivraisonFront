import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChefCenter } from 'src/app/models/ChefCenter';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { ChefcenterService } from 'src/app/services/ChefCenterService/chefcenter.service';

@Component({
  selector: 'app-update-chefcentre',
  templateUrl: './update-chefcentre.component.html',
  styleUrls: ['./update-chefcentre.component.scss']
})
export class UpdateChefcentreComponent implements OnInit {
  chef: ChefCenter=new ChefCenter();
  centers:any;
  disableButton: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private cs:CenterServiceService,private ChefCenterService:ChefcenterService, private toastr: ToastrService,private dialogRef: MatDialogRef<UpdateChefcentreComponent>) { }
  
  getallcenters(){
        
    this.cs.allcenters().subscribe( (data:any) =>{

      this.centers=data;

      },
      (error:any) => console.log(error));  }

  AddChef(){

    this.chef.roleId ="e4fcbcb9-571d-493b-69a8-08dbabbad44c";
    //console.log(this.user);

    this.disableButton = true;
    this.ChefCenterService.AddChefCenter(this.chef).subscribe( (data:any) =>{
      //console.log(data);
      this.closeDialog();
      this.toastr.success("Un Chef Centre a été Ajouter");


      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
        this.ChefCenterService.filter('Register click')

      }
      


  ngOnInit() {
  this.getallcenters()
  this.chef=this.data;
    console.log(this.data)
  }
}
