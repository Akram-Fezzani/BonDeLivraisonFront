import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Antenne } from 'src/app/models/Antenne';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';

@Component({
  selector: 'app-add-antenna',
  templateUrl: './add-antenna.component.html',
  styleUrls: ['./add-antenna.component.scss']
})
export class AddAntennaComponent implements OnInit {
  isCollapsed = true;  
  antenne: Antenne=new Antenne();
  disableButton: boolean = false;
  constructor(private router:Router,private AntenneService:AntenneService,private dialogRef: MatDialogRef<AddAntennaComponent>,private toastr: ToastrService, private _router:Router) { }
  


  AddAntenna(){
    this.disableButton = true;
    this.AntenneService.AddAntenne(this.antenne).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog();
      this.toastr.success("Une Antenne a été ajouter");
      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
        this.AntenneService.filter('Register click')

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
