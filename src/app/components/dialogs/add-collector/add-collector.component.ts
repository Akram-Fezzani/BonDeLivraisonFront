import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { collector } from 'src/app/models/collector';
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

  constructor(private router:Router,private toastr: ToastrService,private us:UserService, private _router:Router,private dialogRef: MatDialogRef<AddCollectorComponent>) { }
  


  AddCollector(){
    this.disableButton = true;
    this.us.addcollector(this.collector).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      //data.centreId=
      //data.center=  
      this.closeDialog();
      this.toastr.success("Un Collecteur a été Ajouter");


      },
      (error:any) => console.log(error));  }




      closeDialog(){
        this.dialogRef.close();
      }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
