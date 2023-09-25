import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AddAntennaComponent } from '../../dialogs/add-antenna/add-antenna.component';
import { AddNotificationComponent } from '../../dialogs/add-notification/add-notification.component';
import { Antenne } from 'src/app/models/Antenne';
import { UpdateAntennaComponent } from '../../dialogs/update-antenna/update-antenna.component';

@Component({
  selector: 'app-antennalist-table',
  templateUrl: './antennalist-table.component.html',
  styleUrls: ['./antennalist-table.component.scss']
})
export class AntennalistTableComponent implements OnInit {
  antennas:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];

  constructor(private us:UserService,private toastr: ToastrService, private AntennaService:AntenneService,private dialog: MatDialog,private _router:Router)
  { 
    this.AntennaService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getallantennas();
    }
    )
  }

  getallantennas(){
        
    this.AntennaService.allantenna().subscribe( (data:any) =>{

      this.antennas=data;

      },
      (error:any) => console.log(error));  }


      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.antennas.slice(startItem, endItem);
     }

      
  opendialog(){
    const dialogRef = this.dialog.open(AddAntennaComponent, {
      width: '300px',

      
    });
    dialogRef.afterClosed().subscribe((result: any) => {
    });
   }


   openUpdateDialog(dataToUpdate: any) {
    const dialogRef = this.dialog.open(UpdateAntennaComponent, {
      width: '300px',
      data:{
        dataToUpdate,
       
      }  // Pass the item you want to update
      
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      // Handle the result if needed (e.g., update the table data)
    });
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
      this.ngOnInit();


    },
    (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.getallantennas();
    this.returnedArray = this.antennas.slice(0, 5);

  }

}
