import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddCenterComponent } from '../add-center/add-center.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-centres-table',
  templateUrl: './centres-table.component.html',
  styleUrls: ['./centres-table.component.scss']
})
export class CentresTableComponent implements OnInit {
  centers:any;
  sortedData:any;
  searchtext='';


  constructor(private us:UserService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

  getallcenters(){
        
    this.cs.allcenters().subscribe( (data:any) =>{

      this.centers=data;
      console.log(this.centers)

      },
      (error:any) => console.log(error));  }

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddCenterComponent
          ,{
            height: '4000px',
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
    this.getallcenters();
  }

}
