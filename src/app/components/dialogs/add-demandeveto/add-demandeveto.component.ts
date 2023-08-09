import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/Article';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { Building } from 'src/app/models/Building';
import { Center } from 'src/app/models/Center';
import { Client } from 'src/app/models/Client';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { BuildingService } from 'src/app/services/BuildingService/building.service';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';

@Component({
  selector: 'app-add-demandeveto',
  templateUrl: './add-demandeveto.component.html',
  styleUrls: ['./add-demandeveto.component.scss']
})
export class AddDemandevetoComponent implements OnInit {
  Id:any;
  types:any;
  currentUser!: User;
  currentcenter!:Center;
  Building:Building=new Building();
  Buildings:any;
  disableButton: boolean = false;


  

  constructor(private dialogRef: MatDialogRef<AddDemandevetoComponent>,private ts:TokenStorageService,private cs:CenterServiceService,private authService: AuthService,private toastr: ToastrService,private BuildingService:BuildingService) { }

  GetBuldingsByCenterId(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
    this.currentUser=r;
    this.Id=r.centreId;
    console.log(this.Id);
    this.Building.CenterId=this.Id
    this.getAllBuildings()
    },
      (error:any) => console.log(error));  }


  closeDialog(){
    this.dialogRef.close();

        }
  ngOnInit(): void {
    this.GetBuldingsByCenterId()
  }


  getAllBuildings(){      
    this.BuildingService.GetBuldingsByCenterId(this.Id,).subscribe( (data:any) =>{
      this.Buildings=data;
      console.log(this.Buildings)
    },
  (error:any) => console.log(error));  }


}
