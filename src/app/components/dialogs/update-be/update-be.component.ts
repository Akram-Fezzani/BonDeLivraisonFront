import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BE } from 'src/app/models/BE';
import { BEService } from 'src/app/services/BEService/be.service';

@Component({
  selector: 'app-update-be',
  templateUrl: './update-be.component.html',
  styleUrls: ['./update-be.component.scss']
})
export class UpdateBeComponent implements OnInit {
  date = new Date();
  BE: BE=new BE();
  disableButton: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<UpdateBeComponent>,private toastr: ToastrService,private BEService:BEService) { }
  //@Input() antenna: any;

 


  closeDialog(){
    this.dialogRef.close();
    this.BEService.filter('Register click')

  }
  ngOnInit(): void {
    this.BE=this.data;
  }

}
