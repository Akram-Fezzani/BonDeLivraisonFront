import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BE } from 'src/app/models/BE';
import { BEService } from 'src/app/services/BEService/be.service';

@Component({
  selector: 'app-add-be',
  templateUrl: './add-be.component.html',
  styleUrls: ['./add-be.component.scss']
})
export class AddBeComponent implements OnInit {

  date = new Date();
  BE: BE=new BE();
  disableButton: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddBeComponent>,private toastr: ToastrService,private BEService:BEService) { }

  AddBE(){
    this.disableButton = true;
    this.BE.ClientId="3fa85f64-5717-4562-b3fc-2c963f66afa6"
    this.BEService.AddBE(this.BE,).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog()
      this.toastr.success("Un bon d'expedition a été Ajouter");

      },
      (error:any) => console.log(error));  }


  closeDialog(){
    this.dialogRef.close();
    this.BEService.filter('Register click')

  }
  ngOnInit(): void {
  }

}
