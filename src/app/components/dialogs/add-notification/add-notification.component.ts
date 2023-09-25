import { Component, Input, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Antenne } from 'src/app/models/Antenne';
import { collector } from 'src/app/models/collector';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {
  isCollapsed = true;
  title!:any;
  button!:any;
  collector: collector=new collector();
  antenne: Antenne=new Antenne();

  disableButton: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private AntenneService:AntenneService,private dialogRef: MatDialogRef<AddNotificationComponent>,private toastr: ToastrService,private us:UserService, private _router:Router) { }
  
  @Input() antenna: any;

  UpdateAntenne(){
    this.disableButton = true;
    if(this.title=="Edit Antenna"){
    this.AntenneService.UpdateAntenne(this.antenne).subscribe( (data:any) =>{
      //console.log(data);
      this.closeDialog();
      this.toastr.success("Un Antenne a été Modifier");

      },
      (error:any) => console.log(error));  
    }
    else if(this.title=="Ajouter")
    {
      this.disableButton = true;
      this.AntenneService.AddAntenne(this.antenne).subscribe( (data:any) =>{
        //console.log(data);
        data.state=true;
        this.closeDialog();
        this.toastr.success("Une Antenne a été ajouter");
  
        },
        (error:any) => console.log(error));   
    }
    }


      closeDialog(){
        this.dialogRef.close();
        this.AntenneService.filter('Register click')
    

      }

      
  ngOnInit() {
    this.antenne=this.data.dataToUpdate;
    this.title=this.data.title;
    this.button=this.data.button;

  }
  ngOnDestroy() {

  }
}
