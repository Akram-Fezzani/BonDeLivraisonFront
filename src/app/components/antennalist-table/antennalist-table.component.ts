import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddAntennaComponent } from '../add-antenna/add-antenna.component';
import { ToastrService } from 'ngx-toastr';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';
@Component({
  selector: 'app-antennalist-table',
  templateUrl: './antennalist-table.component.html',
  styleUrls: ['./antennalist-table.component.scss']
})
export class AntennalistTableComponent implements OnInit {
  antennas:any;
  sortedData:any;
  searchtext='';
  constructor(private us:UserService,private toastr: ToastrService, private AntennaService:AntenneService,private dialog: MatDialog,private _router:Router) { }

  getallantennas(){
        
    this.AntennaService.allantenna().subscribe( (data:any) =>{

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


  Delete(antennaId:string) {
    this.AntennaService.deleteAntenna(antennaId).subscribe( (data:any) =>{
      this.toastr.error("Un Antenne a été effacer");
    },
    (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.getallantennas();
  }

}
