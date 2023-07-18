import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicule } from 'src/app/models/Vehicule';
import { VehiculeService } from 'src/app/services/VehiculeService/vehicule.service';
@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.scss']
})
export class AddVehiculeComponent implements OnInit {

  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  focus3!:any;
  Vehicule: Vehicule=new Vehicule();
  disableButton: boolean = false;

  constructor(private router:Router,private toastr: ToastrService,private VehiculeService:VehiculeService, private _router:Router,private dialogRef: MatDialogRef<AddVehiculeComponent>) { }
  


  AddVehicule(){
    this.disableButton = true;
    this.VehiculeService.AddVehicule(this.Vehicule).subscribe( (data:any) =>{
      console.log(data);
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
