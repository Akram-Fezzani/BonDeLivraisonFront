import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AddCenterComponent } from '../../dialogs/add-center/add-center.component';
import { UpdateCentreComponent } from '../../dialogs/update-centre/update-centre.component';

@Component({
  selector: 'app-centres-table',
  templateUrl: './centres-table.component.html',
  styleUrls: ['./centres-table.component.scss']
})
export class CentresTableComponent implements OnInit {
  centers:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];


  constructor(private us:UserService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) 
  { 
    this.cs.listen().subscribe((m:any)=>{
      console.log(m);
      this.getallcenters();
    }
    )
  }

  getallcenters(){
        
    this.cs.allcenters().subscribe( (data:any) =>{

      this.centers=data;

      },
      (error:any) => console.log(error));  }

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
       openUpdateDialog(dataToUpdate: any) {
        const dialogRef = this.dialog.open(UpdateCentreComponent, {
          width: '300px',
          data:dataToUpdate,
           
          
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          // Handle the result if needed (e.g., update the table data)
        });
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
          this.ngOnInit();
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getallcenters();
    this.returnedArray = this.centers.slice(0, 5);

  }

}
