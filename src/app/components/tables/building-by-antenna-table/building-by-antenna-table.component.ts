import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { BuildingService } from 'src/app/services/BuildingService/building.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddBuildingComponent } from '../../dialogs/add-building/add-building.component';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';

@Component({
  selector: 'app-building-by-antenna-table',
  templateUrl: './building-by-antenna-table.component.html',
  styleUrls: ['./building-by-antenna-table.component.scss']
})
export class BuildingByAntennaTableComponent implements OnInit {

  Buildings:any;
  sortedData:any;
  searchtext='';
  returnedArray!: any;
  currentUser!: User;
  Id:any;
  centers:any;


  constructor(private ts:TokenStorageService, private cs:CenterServiceService,private authService: AuthService,private us:UserService,private toastr: ToastrService, private BuildingService:BuildingService,private dialog: MatDialog,private _router:Router) { }

  getallBuilgings(){
        
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
        this.currentUser=r;
        this.Id=r.centreId;
    this.BuildingService.GetBuldingsByAntennaId(this.Id).subscribe( (data:any) =>{

      this.Buildings=data;
      console.log(this.Buildings);

    },
    (error:any) => console.log(error));  
}, (error:any) => console.log(error));  }

getcentersByAntenna(){
  const id=this.ts.getId()+"";
  this.authService.getcurrentuser(id,).subscribe((r:any)=>{
      this.currentUser=r;
      this.Id=r.centreId;
  this.cs.getCenterByAntenna(this.Id).subscribe( (data:any) =>{

    this.centers=data;
    console.log(this.centers);

  },
  (error:any) => console.log(error));  
}, (error:any) => console.log(error));  }


      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.Buildings.slice(startItem, endItem);
     }

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddBuildingComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.Buildings();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(BLId:string) {
        this.BuildingService.deleteBuilding(BLId).subscribe( (data:any) =>{
          this.toastr.error("Un bon de livraison a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getallBuilgings();
    this.getcentersByAntenna();
    this.returnedArray = this.Buildings.slice(0, 5);

  }

}