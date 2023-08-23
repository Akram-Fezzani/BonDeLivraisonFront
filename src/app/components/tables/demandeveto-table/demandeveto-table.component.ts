import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { BuildingService } from 'src/app/services/BuildingService/building.service';
import { UserService } from 'src/app/services/user/user.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { User } from 'src/app/models/User';
import { Center } from 'src/app/models/Center';
import { DemandeVetoService } from 'src/app/services/DemandeVetoService/demande-veto.service';

@Component({
  selector: 'app-demandeveto-table',
  templateUrl: './demandeveto-table.component.html',
  styleUrls: ['./demandeveto-table.component.scss']
})
export class DemandevetoTableComponent implements OnInit {

 
  
  Id:any;
  DemandeVeto:any;
  currentUser!: User;
  currentcenter!:Center;
  disableButton: boolean = false;


  constructor(private ts:TokenStorageService,private demandeVetoService:DemandeVetoService,private cs:CenterServiceService,private authService: AuthService,private toastr: ToastrService,private BuildingService:BuildingService) { }

  getDemandeVetoByCenter(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
        this.currentUser=r;
        this.Id=r.centreId;
          this.demandeVetoService.getDemandeVetoByAntenna(this.Id).subscribe( (data:any) =>{
            this.DemandeVeto=data;
          },
          (error:any) => console.log(error));  
      }, (error:any) => console.log(error));  }
     

     

      

      Delete(BLId:string) {
        this.BuildingService.deleteBuilding(BLId).subscribe( (data:any) =>{
          this.toastr.error("Un bon de livraison a été effacer");
        },
        (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getDemandeVetoByCenter();

  }

}
