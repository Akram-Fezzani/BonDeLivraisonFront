import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-centersbyantenna-table',
  templateUrl: './centersbyantenna-table.component.html',
  styleUrls: ['./centersbyantenna-table.component.scss']
})
export class CentersbyantennaTableComponent implements OnInit {

  centers:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];
  Id:any;
  DemandeVeto:any;
  currentUser!: User;
  currentcenter!:Center;

  constructor(private ts:TokenStorageService,private authService: AuthService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

  getcentersByAntenna(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
        this.currentUser=r;
        this.Id=r.centreId;
        console.log(this.Id);
    this.cs.getCenterByAntenna(this.Id).subscribe( (data:any) =>{

      this.centers=data;

    },
    (error:any) => console.log(error));  
}, (error:any) => console.log(error));  }

      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.centers.slice(startItem, endItem);
     }

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddCenterComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.centers();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(CenterId:string) {
        this.cs.deleteCenter(CenterId).subscribe( (data:any) =>{
          this.toastr.error("Un Centre a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getcentersByAntenna();
    this.returnedArray = this.centers.slice(0, 5);

  }

}
