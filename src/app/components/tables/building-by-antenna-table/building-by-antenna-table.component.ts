import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Building } from 'src/app/models/Building';

@Component({
  selector: 'app-building-by-antenna-table',
  templateUrl: './building-by-antenna-table.component.html',
  styleUrls: ['./building-by-antenna-table.component.scss']
})
export class BuildingByAntennaTableComponent implements OnInit {

  color = '#202454'
  Buildings:any;
  currentUser!: User;
  Id:any;
  centers:any;

  displayedColumns = ['buildingCode','buildingLabel', 'buildingArea', 'buildingAdress', 'couvoir','souche','age','rotation'];
  dataSource: MatTableDataSource<Building>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private ts:TokenStorageService, private cs:CenterServiceService,private authService: AuthService,private us:UserService,private toastr: ToastrService, private BuildingService:BuildingService,private dialog: MatDialog,private _router:Router) 
  {
    this.getallBuilgings()
    this.dataSource = new MatTableDataSource(this.Buildings);
   }
  
  getallBuilgings(){      
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
        this.currentUser=r;
        this.Id=r.centreId;
            this.BuildingService.GetBuldingsByAntennaId(this.Id).subscribe( (data:any) =>{
              this.Buildings=data;
             // console.log(this.Buildings)
              this.dataSource = new MatTableDataSource(this.Buildings);
            },
            (error:any) => console.log(error));  
}, (error:any) => console.log(error));  }


opendialog(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(AddBuildingComponent
    ,{
      height: '-4000px',
  width: '6000px',});
 }

ngOnInit(): void {
  this.getallBuilgings();
}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}







}

