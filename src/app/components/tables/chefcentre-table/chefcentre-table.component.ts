import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import { ChefcenterService } from 'src/app/services/ChefCenterService/chefcenter.service';
import { UserService } from 'src/app/services/user/user.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AddChefcenterComponent } from '../../dialogs/add-chefcenter/add-chefcenter.component';
import { UpdateChefcentreComponent } from '../../dialogs/update-chefcentre/update-chefcentre.component';

@Component({
  selector: 'app-chefcentre-table',
  templateUrl: './chefcentre-table.component.html',
  styleUrls: ['./chefcentre-table.component.scss']
})
export class ChefcentreTableComponent implements OnInit {
  users:any;
  sortedData:any;
  UserId!:string;
  searchtext='';
  returnedArray!: string[];
  
  constructor(private us:UserService,private toastr: ToastrService, private ChefCenterService:ChefcenterService,private dialog: MatDialog,private _router:Router)
  {
    this.us.listen().subscribe((m:any)=>{
      console.log(m);
      this.chefcenters();
    }
    )
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.users.slice(startItem, endItem);
 }
  chefcenters(){
        
    this.ChefCenterService.chefcenters().subscribe( (data:any) =>{
      this.users=data;

      },
      (error:any) => console.log(error));  }

  opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddChefcenterComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }    
       openUpdateDialog(dataToUpdate: any) {
        const dialogRef = this.dialog.open(UpdateChefcentreComponent, {
          width: '300px',
          data:dataToUpdate,
        });
        dialogRef.afterClosed().subscribe((result: any) => {
          // Handle the result if needed (e.g., update the table data)
        });
      }
  sortData(sort: Sort) {
        const data = this.chefcenters();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(UserId:string) {
        this.ChefCenterService.deleteChefCenter(UserId).subscribe( (data:any) =>{
          this.toastr.error("Un Chef Centre a été effacer");
          this.ngOnInit();

        },
        (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.chefcenters();
    this.returnedArray = this.users.slice(0, 5);

  }

}