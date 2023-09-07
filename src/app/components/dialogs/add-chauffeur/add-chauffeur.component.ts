import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chauffeur } from 'src/app/models/Chauffeur';
import { ChauffeurService } from 'src/app/services/ChauffeurService/chauffeur.service';

@Component({
  selector: 'app-add-chauffeur',
  templateUrl: './add-chauffeur.component.html',
  styleUrls: ['./add-chauffeur.component.scss']
})
export class AddChauffeurComponent implements OnInit {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  focus3!:any;
  chauffeur: Chauffeur=new Chauffeur();
  disableButton: boolean = false;

  constructor(private router:Router,private toastr: ToastrService,private ChauffeurService:ChauffeurService, private _router:Router,private dialogRef: MatDialogRef<AddChauffeurComponent>) { }
  


  AddChauffeur(){
    this.disableButton = true;
    this.ChauffeurService.AddChauffeur(this.chauffeur).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;

      this.closeDialog();
      this.toastr.success("Un Chauffeur a été Ajouter");


      },
      (error:any) => console.log(error));  }




      closeDialog(){
        this.dialogRef.close();
      }

  ngOnInit() {


  }
  ngOnDestroy() {

  }
}
