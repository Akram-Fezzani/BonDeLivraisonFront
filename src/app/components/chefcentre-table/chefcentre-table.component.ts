import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AddChefcenterComponent } from 'src/app/components/add-chefcenter/add-chefcenter.component';
import {ToastrService} from "ngx-toastr";
import { ChefcenterService } from 'src/app/services/ChefCenterService/chefcenter.service';
import { UserService } from 'src/app/services/user/user.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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
  
  constructor(private us:UserService,private toastr: ToastrService, private ChefCenterService:ChefcenterService,private dialog: MatDialog,private _router:Router) { }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.users.slice(startItem, endItem);
 }
  chefcenters(){
        
    this.us.chefcenters().subscribe( (data:any) =>{
      this.users=data;
      console.log(this.users);

      },
      (error:any) => console.log(error));  }

  opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddChefcenterComponent
          ,{
            height: '4000px',
        width: '6000px',});
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
        },
        (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.chefcenters();
    this.returnedArray = this.users.slice(0, 5);

  }

}
