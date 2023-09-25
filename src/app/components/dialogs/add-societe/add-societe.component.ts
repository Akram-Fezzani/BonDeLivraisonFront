import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Societe } from 'src/app/models/Societe';

import { SocieteServiceService } from 'src/app/services/SocieteService/societe-service.service';

@Component({
  selector: 'app-add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.scss']
})
export class AddSocieteComponent implements OnInit {

  
  isCollapsed = true;
  
  societe: Societe=new Societe();
  disableButton: boolean = false;

  constructor(private router:Router,private ss:SocieteServiceService,private toastr: ToastrService, private _router:Router,private dialogRef: MatDialogRef<AddSocieteComponent>) { }
  


  AddSociete(){
    this.disableButton = true;
    this.ss.addSociete(this.societe).subscribe( (data:any) =>{
      //console.log(data);
      this.toastr.success("Une Societe a été Ajouter");

this.closeDialog();
      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
        this.ss.filter('Register click')

      }
      


  ngOnInit() {
  
  }
}
