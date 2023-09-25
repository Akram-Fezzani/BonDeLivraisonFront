import { Component, Input, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Antenne } from 'src/app/models/Antenne';
import { collector } from 'src/app/models/collector';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-update-antenna',
  templateUrl: './update-antenna.component.html',
  styleUrls: ['./update-antenna.component.scss']
})
export class UpdateAntennaComponent implements OnInit {
  isCollapsed = true;
  antenne: Antenne=new Antenne();
  disableButton: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private AntenneService:AntenneService,private dialogRef: MatDialogRef<UpdateAntennaComponent>,private toastr: ToastrService,private us:UserService, private _router:Router) { }
  

  UpdateAntenne(){
    this.disableButton = true;
    this.AntenneService.UpdateAntenne(this.antenne).subscribe( (data:any) =>{
      //console.log(data);
      this.closeDialog();
      this.toastr.success("Un Antenne a été Modifier");
      },
      (error:any) => console.log(error));  
    
   
    }


      closeDialog(){
        this.dialogRef.close();
        this.AntenneService.filter('Register click')
    

      }

      
  ngOnInit() {
    this.antenne=this.data.dataToUpdate;
    

  }
  ngOnDestroy() {

  }
}
