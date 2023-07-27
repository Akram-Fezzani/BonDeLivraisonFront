import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { BLService } from 'src/app/services/BLService/bl.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddBlComponent } from '../../dialogs/add-bl/add-bl.component';

@Component({
  selector: 'app-bl-table',
  templateUrl: './bl-table.component.html',
  styleUrls: ['./bl-table.component.scss']
})
export class BlTableComponent implements OnInit {

 
 
  BLs:any;
  sortedData:any;
  searchtext='';
  returnedArray!: any;


  constructor(private us:UserService,private toastr: ToastrService, private BLService:BLService,private dialog: MatDialog,private _router:Router) { }

  getallBLs(){
        
    this.BLService.allBLs().subscribe( (data:any) =>{

      this.BLs=data;

      },
      (error:any) => console.log(error));  }

      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.BLs.slice(startItem, endItem);
     }

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddBlComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.BLs();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(BLId:string) {
        this.BLService.deleteBL(BLId).subscribe( (data:any) =>{
          this.toastr.error("Un bon de livraison a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getallBLs();
    this.returnedArray = this.BLs.slice(0, 5);

  }

}
