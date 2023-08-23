import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { User } from 'src/app/models/User';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { ChefcenterService } from 'src/app/services/ChefCenterService/chefcenter.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { UserService } from 'src/app/services/user/user.service';
import { AddCollectorComponent } from '../../dialogs/add-collector/add-collector.component';

@Component({
  selector: 'app-collectors-by-antenna-table',
  templateUrl: './collectors-by-antenna-table.component.html',
  styleUrls: ['./collectors-by-antenna-table.component.scss']
})
export class CollectorsByAntennaTableComponent implements OnInit {

  currentUser!: User;
  Id:any;
  currentcenter:any;
  collectors:any;
  returnedArray!: any;

  
  constructor(private us:UserService,private dialog: MatDialog,private _router:Router,private AntennaService:AntenneService,private authService: AuthService,private cs:CenterServiceService,private ts:TokenStorageService, private ChefService:ChefcenterService) { }
 
 
  getcurrentuser(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
     this.currentUser=r;
     //console.log(r);
    this.Id=r.centreId;


     
        this.cs.getCollectorsByCenter(this.Id).subscribe( (data:any) =>{
          this.collectors=data;

          
    },(error:any) => console.log(error));  
       
    },(error:any) => console.log(error));
    
    }


    pageChanged(event: PageChangedEvent): void {
      const startItem = (event.page - 1) * event.itemsPerPage;
      const endItem = event.page * event.itemsPerPage;
      this.returnedArray = this.collectors.slice(startItem, endItem);
  }    
          
 opendialog(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(AddCollectorComponent
    ,{height: '-4000px',
  width: '6000px',});
 }

  ngOnInit(): void {
    this.getcurrentuser();
    this.returnedArray = this.collectors.slice(0, 5);

  }

}
