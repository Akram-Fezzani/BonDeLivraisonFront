import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Building } from 'src/app/models/Building';
import { TypeService } from 'src/app/services/TypeService/type.service';
import { BuildingService } from 'src/app/services/BuildingService/building.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { User } from 'src/app/models/User';
import { Center } from 'src/app/models/Center';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.scss']
})
export class AddBuildingComponent implements OnInit {
  Id:any;
  types:any;
  currentUser!: User;
  currentcenter!:Center;
  Building:Building=new Building();
  disableButton: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddBuildingComponent>,private TypeService:TypeService,private ts:TokenStorageService,private cs:CenterServiceService,private authService: AuthService,private toastr: ToastrService,private BuildingService:BuildingService) { }

  AddBuilding(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
      this.currentUser=r;
      this.Id=r.centreId;
      //console.log(this.Id);
      this.Building.CenterId=this.Id

        this.BuildingService.AddBuilding(this.Building,).subscribe( (data:any) =>{
            //console.log(data);
            data.state=true;
            this.closeDialog()
            this.toastr.success("Un batiment a était Ajouter");
        },
        (error:any) => console.log(error));  }, 
    (error:any) => console.log(error));  }
     
  getAllTypes(){      
    this.TypeService.getTypes().subscribe( (data:any) =>{
      this.types=data;
      //console.log(this.types)
    },
  (error:any) => console.log(error));  }



  closeDialog(){
    this.dialogRef.close();
  }
 
 
  ngOnInit(): void {
    this.getAllTypes()
  }
}
