import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Societe } from 'src/app/models/Societe';
import { User } from 'src/app/models/User';
import { RegisterService } from 'src/app/services/registerservice/register.service';
import { SocieteServiceService } from 'src/app/services/SocieteService/societe-service.service';

@Component({
  selector: 'app-add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.scss']
})
export class AddSocieteComponent implements OnInit {

  
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  societe: Societe=new Societe();
  disableButton: boolean = false;

  constructor(private router:Router,private ss:SocieteServiceService, private _router:Router,private dialogRef: MatDialogRef<AddSocieteComponent>) { }
  


  AddUser(){
    this.disableButton = true;
    this.ss.addSociete(this.societe).subscribe( (data:any) =>{
      console.log(data);
     

      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
      }
      


  ngOnInit() {
  
  }
}
