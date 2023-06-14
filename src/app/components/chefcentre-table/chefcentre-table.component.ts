import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AddChefcenterComponent } from 'src/app/components/add-chefcenter/add-chefcenter.component';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chefcentre-table',
  templateUrl: './chefcentre-table.component.html',
  styleUrls: ['./chefcentre-table.component.scss']
})
export class ChefcentreTableComponent implements OnInit {
  users:any;
  sortedData:any;

  constructor(private us:UserService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }


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

  ngOnInit(): void {
    this.chefcenters();
  }

}
