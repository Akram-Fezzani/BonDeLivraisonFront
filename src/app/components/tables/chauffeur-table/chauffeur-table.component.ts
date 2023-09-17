import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ChauffeurService } from 'src/app/services/ChauffeurService/chauffeur.service';
import { AddChauffeurComponent } from '../../dialogs/add-chauffeur/add-chauffeur.component';

@Component({
  selector: 'app-chauffeur-table',
  templateUrl: './chauffeur-table.component.html',
  styleUrls: ['./chauffeur-table.component.scss']
})
export class ChauffeurTableComponent implements OnInit {
  Chauffeurs:any;
  sortedData:any;
  UserId!:string;
  searchtext='';
  returnedArray!: string[];
  
  constructor(private ChauffeurService:ChauffeurService,private toastr: ToastrService,private dialog: MatDialog,private _router:Router) { }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.Chauffeurs.slice(startItem, endItem);
 }
  chefcenters(){
        
    this.ChauffeurService.getChauffeurs().subscribe( (data:any) =>{
      this.Chauffeurs=data;

      },
      (error:any) => console.log(error));  }

  opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddChauffeurComponent
          ,{
            height: '-4000px',
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
        this.ChauffeurService.deleteChauffeur(ChauffeurId).subscribe( (data:any) =>{
          this.toastr.error("Un Chauffeur a été effacer");
          this.ngOnInit();

        },
        (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.chefcenters();
    this.returnedArray = this.Chauffeurs.slice(0, 5);

  }

}
