import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { VehiculeService } from 'src/app/services/VehiculeService/vehicule.service';
import { AddVehiculeComponent } from '../../dialogs/add-vehicule/add-vehicule.component';

@Component({
  selector: 'app-vehicule-table',
  templateUrl: './vehicule-table.component.html',
  styleUrls: ['./vehicule-table.component.scss']
})
export class VehiculeTableComponent implements OnInit {

  Vehicule:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];
  
  constructor(private VehiculeService:VehiculeService,private toastr: ToastrService,private dialog: MatDialog,private _router:Router) { }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.Vehicule.slice(startItem, endItem);
 }
  chefcenters(){
        
    this.VehiculeService.getVehicules().subscribe( (data:any) =>{
      this.Vehicule=data;

      },
      (error:any) => console.log(error));  }

  opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddVehiculeComponent
          ,{
            height: '4000px',
        width: '6000px',});
       }    

  sortData(sort: Sort) {
        const data = this.chefcenters();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(ChauffeurId:string) {
        this.VehiculeService.deleteVehicule(ChauffeurId).subscribe( (data:any) =>{
          this.toastr.error("Une Vehicule a était éffacer");
        },
        (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.chefcenters();
    this.returnedArray = this.Vehicule.slice(0, 5);

  }

}

