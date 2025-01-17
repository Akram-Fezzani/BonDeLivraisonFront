import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Center } from 'src/app/models/Center';
import { NotificationForum} from 'src/app/models/NotificationForum';
import { collector } from 'src/app/models/collector';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { NotificationService } from 'src/app/services/notification/notification.service';


@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.scss']
})
export class AddCenterComponent implements OnInit {
  isCollapsed = true;
  notification!:Notification;
  collector: collector=new collector();
  center: Center=new Center();
  notif: NotificationForum=new NotificationForum();
  disableButton: boolean = false;
  constructor(private router:Router,private ns:NotificationService,private NotificationService:NotificationService,private CentreService:CenterServiceService,private toastr: ToastrService, private _router:Router,private dialogRef: MatDialogRef<AddCenterComponent>) { }
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
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  
}
