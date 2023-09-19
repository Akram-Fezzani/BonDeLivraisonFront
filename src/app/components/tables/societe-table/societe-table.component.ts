import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddRoleComponent } from '../../dialogs/add-role/add-role.component';
import { RoleService } from 'src/app/services/RoleService/role.service';
import { SocieteServiceService } from 'src/app/services/SocieteService/societe-service.service';
import { AddSocieteComponent } from '../../dialogs/add-societe/add-societe.component';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-societe-table',
  templateUrl: './societe-table.component.html',
  styleUrls: ['./societe-table.component.scss']
})
export class SocieteTableComponent implements OnInit {
  societes:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];


  constructor(private SocieteService:SocieteServiceService,private toastr: ToastrService,private dialog: MatDialog,private _router:Router) 
  { 
    this.SocieteService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getAllSocietes();
    }
    )
  }

      getAllSocietes(){
            
        this.SocieteService.getSocietes().subscribe( (data:any) =>{

          this.societes=data;
          //console.log(this.societes)

          },
          (error:any) => console.log(error));  }


          pageChanged(event: PageChangedEvent): void {
            const startItem = (event.page - 1) * event.itemsPerPage;
            const endItem = event.page * event.itemsPerPage;
            this.returnedArray = this.societes.slice(startItem, endItem);
        }    


      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddSocieteComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.societes();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }


      Delete(societeId:string) {
        this.SocieteService.deleteSociete(societeId).subscribe( (data:any) =>{
          this.toastr.error("Une société a été effacer");
          this.ngOnInit();

        },
        (error:any) => console.log(error));  }
  ngOnInit(): void {
    this.getAllSocietes();
    this.returnedArray = this.societes.slice(0, 5);

  }

}
