import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddRoleComponent } from '../../dialogs/add-role/add-role.component';
import { SpeculationService } from 'src/app/services/SpeculationService/speculation.service';
import { ToastrService } from 'ngx-toastr';
import { AddSpeculationComponent } from '../../dialogs/add-speculation/add-speculation.component';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-speculation-table',
  templateUrl: './speculation-table.component.html',
  styleUrls: ['./speculation-table.component.scss']
})
export class SpeculationTableComponent implements OnInit {

  speculation:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];


  constructor(private us:UserService,private SpeculationService:SpeculationService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

      getAllRoles(){
            
        this.SpeculationService.getSpeculations().subscribe( (data:any) =>{

          this.speculation=data;
          console.log(this.speculation)

          },
          (error:any) => console.log(error));  }


          pageChanged(event: PageChangedEvent): void {
            const startItem = (event.page - 1) * event.itemsPerPage;
            const endItem = event.page * event.itemsPerPage;
            this.returnedArray = this.speculation.slice(startItem, endItem);
        }    

        
      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddSpeculationComponent
          ,{
            height: '4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.speculation();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }
      Delete(SpeculationId:string) {
        this.SpeculationService.deleteSpeculation(SpeculationId).subscribe( (data:any) =>{
          this.toastr.error("Une Speculation a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getAllRoles();
    this.returnedArray = this.speculation.slice(0, 5);

  }

}
