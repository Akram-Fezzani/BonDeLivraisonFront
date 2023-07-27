import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { AddRoleComponent } from '../../dialogs/add-role/add-role.component';
import { RoleService } from 'src/app/services/RoleService/role.service';
import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.scss']
})
export class RolesTableComponent implements OnInit {
  roles:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];


  constructor(private us:UserService,private RoleService:RoleService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

  getAllRoles(){
        
    this.RoleService.getRoles().subscribe( (data:any) =>{

      this.roles=data;
      console.log(this.roles)

      },
      (error:any) => console.log(error));  }

      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.roles.slice(startItem, endItem);
     }    

      opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddRoleComponent
          ,{
            height: '-4000px',
        width: '6000px',});
       }

       sortData(sort: Sort) {
        const data = this.roles();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }
      Delete(RoleId:string) {
        this.RoleService.deleteRole(RoleId).subscribe( (data:any) =>{
          this.toastr.error("Un Role a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getAllRoles();
    this.returnedArray = this.roles.slice(0, 5);

  }

}
