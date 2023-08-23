import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AddCenterComponent } from '../../dialogs/add-center/add-center.component';
import { Center } from 'src/app/models/Center';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-centersbyantenna-table',
  templateUrl: './centersbyantenna-table.component.html',
  styleUrls: ['./centersbyantenna-table.component.scss']
})
export class CentersbyantennaTableComponent implements OnInit {
  color = '#202454'
  centers:any;
  Id:any;
  DemandeVeto:any;
  currentUser!: User;
  currentcenter!:Center;


  displayedColumns = ['centerLabel','rotationActuelle', 'codeSpecification', 'usefulSurface','buildingNumber', 'isActive','centerCode','socialReason','blPrefixNumber'];
  dataSource: MatTableDataSource<Center>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private ts:TokenStorageService,private authService: AuthService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router)
   { 
    this.getcentersByAntenna()
    this.dataSource = new MatTableDataSource(this.centers);
   }

  getcentersByAntenna(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
        this.currentUser=r;
        this.Id=r.centreId;
    this.cs.getCenterByAntenna(this.Id).subscribe( (data:any) =>{
      this.centers=data;
      this.dataSource = new MatTableDataSource(this.centers);


    },
    (error:any) => console.log(error));  
}, (error:any) => console.log(error));  }

  

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddCenterComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

     

      Delete(CenterId:string) {
        this.cs.deleteCenter(CenterId).subscribe( (data:any) =>{
          this.toastr.error("Un Centre a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getcentersByAntenna();

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
