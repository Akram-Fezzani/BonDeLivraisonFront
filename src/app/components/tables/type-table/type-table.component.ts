import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { TypeService } from 'src/app/services/TypeService/type.service';
import { ToastrService } from 'ngx-toastr';
import { AddTypeComponent } from '../../dialogs/add-type/add-type.component';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-type-table',
  templateUrl: './type-table.component.html',
  styleUrls: ['./type-table.component.scss']
})
export class TypeTableComponent implements OnInit {


  type:any;
  sortedData:any;
  searchtext='';
  returnedArray!: string[];


  constructor(private us:UserService,private TypeService:TypeService,private toastr: ToastrService, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) 
  { 
    this.TypeService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getAllTypes();
    }
    )
  }

  getAllTypes(){      
  this.TypeService.getTypes().subscribe( (data:any) =>{
    this.type=data;
    //console.log(this.type)
  },
  (error:any) => console.log(error));  }


  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.type.slice(startItem, endItem);
  }    



  opendialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddTypeComponent,{height: '-4000px',width: '6000px',});
  }

  sortData(sort: Sort) {
    const data = this.type();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
  }
  Delete(SpeculationId:string) {
    this.TypeService.deleteType(SpeculationId).subscribe( (data:any) =>{
          this.toastr.error("Un type a été effacer");
          this.ngOnInit();

    },
  (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getAllTypes();
    this.returnedArray = this.type.slice(0, 5);

  }

}
