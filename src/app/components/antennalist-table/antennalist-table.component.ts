import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddAntennaComponent } from '../add-antenna/add-antenna.component';
@Component({
  selector: 'app-antennalist-table',
  templateUrl: './antennalist-table.component.html',
  styleUrls: ['./antennalist-table.component.scss']
})
export class AntennalistTableComponent implements OnInit {
  antennas:any;
  sortedData:any;
  constructor(private us:UserService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

  getallantennas(){
        
    this.cs.allantenna().subscribe( (data:any) =>{

      this.antennas=data;
      console.log(this.antennas)

      },
      (error:any) => console.log(error));  }




      
  opendialog(){
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    this.dialog.open(AddAntennaComponent
      ,{
        height: '4000px',
    width: '6000px',});
   }

   sortData(sort: Sort) {
    const data = this.antennas();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
  }



  ngOnInit(): void {
    this.getallantennas();
  }

}
