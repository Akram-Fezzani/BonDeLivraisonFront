import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { BEService } from 'src/app/services/BEService/be.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddBeComponent } from '../../dialogs/add-be/add-be.component';
import { AddBlComponent } from '../../dialogs/add-bl/add-bl.component';
import { UpdateBeComponent } from '../../dialogs/update-be/update-be.component';

@Component({
  selector: 'app-be-table',
  templateUrl: './be-table.component.html',
  styleUrls: ['./be-table.component.scss']
})
export class BeTableComponent implements OnInit {

 
 
  Bes:any;
  sortedData:any;
  searchtext='';
  returnedArray!: any;


  constructor(private us:UserService,private toastr: ToastrService, private BEService:BEService,private dialog: MatDialog,private _router:Router) 
  { 
    this.BEService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getallBEs();
    }
    )
  }

  getallBEs(){
        
    this.BEService.allBes().subscribe( (data:any) =>{

      this.Bes=data;
     // console.log(data)

      },
      (error:any) => console.log(error));  }

      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.Bes.slice(startItem, endItem);
     }

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddBeComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

       openUpdateDialog(dataToUpdate: any) {
        const dialogRef = this.dialog.open(UpdateBeComponent, {
          width: '300px',
          data:dataToUpdate,
           
          
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          // Handle the result if needed (e.g., update the table data)
        });
      }

       sortData(sort: Sort) {
        const data = this.Bes();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(CenterId:string) {
        this.BEService.deleteBE(CenterId).subscribe( (data:any) =>{
          this.toastr.error("Un bon de livraison a été effacer");
          this.ngOnInit();

        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getallBEs();
    this.returnedArray = this.Bes.slice(0, 5);

  }

}
