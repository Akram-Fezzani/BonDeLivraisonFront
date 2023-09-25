import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Center } from 'src/app/models/Center';
import { NotificationForum} from 'src/app/models/NotificationForum';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-update-centre',
  templateUrl: './update-centre.component.html',
  styleUrls: ['./update-centre.component.scss']
})
export class UpdateCentreComponent implements OnInit {

  isCollapsed = true;
  notification!:Notification;
  center: Center=new Center();
  notif: NotificationForum=new NotificationForum();
  disableButton: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ns:NotificationService,private NotificationService:NotificationService,private CentreService:CenterServiceService,private toastr: ToastrService, private _router:Router,private dialogRef: MatDialogRef<UpdateCentreComponent>) { }
  AddCenter(){
    this.disableButton = true;
    this.center.antennaId="3fa85f64-5717-4562-b3fc-2c963f66afa6"
    this.CentreService.AddCenter(this.center,).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog()
      this.AddNotif();
      },
      (error:any) => console.log(error));  }


      AddNotif(){
        this.notif.UseriD="3fa85f64-5717-4562-b3fc-2c963f66afa6"
        this.notif.senderId="3fa85f64-5717-4562-b3fc-2c963f66afa6"
        this.notif.content="Un Centre a été Ajouter"
        this.notif.notifDate= new Date();

        this.disableButton = true;
        this.ns.addNotif(this.notif).subscribe( (data:any) =>{
          //console.log(data);
          this.toastr.success("Un Centre a été Ajouter");
    
        this.closeDialog();
          },
          (error:any) => console.log(error));  }
    
    
      
      

      

      closeDialog(){
        this.dialogRef.close();
        this.CentreService.filter('Register click')
      }
      


  ngOnInit() {
    this.center=this.data;
  }
  
}
