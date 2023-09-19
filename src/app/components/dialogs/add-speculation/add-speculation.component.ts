import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Speculation } from 'src/app/models/Speculation';
import { SpeculationService } from 'src/app/services/SpeculationService/speculation.service';

@Component({
  selector: 'app-add-speculation',
  templateUrl: './add-speculation.component.html',
  styleUrls: ['./add-speculation.component.scss']
})
export class AddSpeculationComponent implements OnInit {

  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  speculation: Speculation=new Speculation();

  disableButton: boolean = false;

  constructor(private router:Router,private SpeculationService:SpeculationService,private dialogRef: MatDialogRef<AddSpeculationComponent>,private toastr: ToastrService, private _router:Router) { }
  


  AddSpeculation(){
    this.disableButton = true;
    this.SpeculationService.AddSpeculation(this.speculation).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog();
      this.toastr.success("Une Speculation a été ajouter");

      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
        this.SpeculationService.filter('Register click')

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
