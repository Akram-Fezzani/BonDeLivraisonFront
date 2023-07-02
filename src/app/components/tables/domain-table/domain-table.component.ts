import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddRoleComponent } from '../../dialogs/add-role/add-role.component';
import { DomainService } from 'src/app/services/DomainService/domain.service';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-domain-table',
  templateUrl: './domain-table.component.html',
  styleUrls: ['./domain-table.component.scss']
})
export class DomainTableComponent implements OnInit {

  Domain:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];


  constructor(private us:UserService,private DomainService:DomainService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

      getAllRoles(){
            
        this.DomainService.getDomains().subscribe( (data:any) =>{

          this.Domain=data;
          console.log(this.Domain)

          },
          (error:any) => console.log(error));  }


      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.Domain.slice(startItem, endItem);
    }    


      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddRoleComponent
          ,{
            height: '4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.Domain();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }
      Delete(SpeculationId:string) {
        this.DomainService.deleteDomain(SpeculationId).subscribe( (data:any) =>{
          this.toastr.error("Un Domaine a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getAllRoles();
    this.returnedArray = this.Domain.slice(0, 5);

  }

}
