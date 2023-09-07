import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Type } from 'src/app/models/Type';
import { TypeService } from 'src/app/services/TypeService/type.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss']
})
export class AddTypeComponent implements OnInit {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  type: Type=new Type();

  disableButton: boolean = false;

  constructor(private router:Router,private TypeService:TypeService,private dialogRef: MatDialogRef<AddTypeComponent>,private toastr: ToastrService, private _router:Router) { }
  


  AddType(){
    this.disableButton = true;
    this.TypeService.AddType(this.type).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog();
      this.toastr.success("Un type a été ajouter");

      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
      }


  ngOnInit() {


  }

}


