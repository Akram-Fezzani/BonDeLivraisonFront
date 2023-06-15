import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddCenterComponent } from '../add-center/add-center.component';
import { AddRoleComponent } from '../add-role/add-role.component';
import { RoleService } from 'src/app/services/RoleService/role.service';
import { SocieteServiceService } from 'src/app/services/SocieteService/societe-service.service';
import { AddSocieteComponent } from '../add-societe/add-societe.component';


@Component({
  selector: 'app-societe-table',
  templateUrl: './societe-table.component.html',
  styleUrls: ['./societe-table.component.scss']
})
export class SocieteTableComponent implements OnInit {
  societes:any;
  sortedData:any;


  constructor(private ss:SocieteServiceService,private dialog: MatDialog,private _router:Router) { }

  getAllSocietes(){
        
    this.ss.getSocietes().subscribe( (data:any) =>{

      this.societes=data;
      console.log(this.societes)

      },
      (error:any) => console.log(error));  }

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddSocieteComponent
          ,{
            height: '4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.societes();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }
  ngOnInit(): void {
    this.getAllSocietes();
  }

}
