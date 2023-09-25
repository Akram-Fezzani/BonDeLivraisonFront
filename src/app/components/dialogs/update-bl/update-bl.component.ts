import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/Article';
import { BE } from 'src/app/models/BE';
import { BL } from 'src/app/models/BL';
import { Client } from 'src/app/models/Client';

import { BLService } from 'src/app/services/BLService/bl.service';
@Component({
  selector: 'app-update-bl',
  templateUrl: './update-bl.component.html',
  styleUrls: ['./update-bl.component.scss']
})
export class UpdateBlComponent implements OnInit {

  date = new Date();
  BL: BL=new BL();
  BE: BE=new BE();
  Client:Client=new Client();
  Article:Article=new Article();
  disableButton: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<UpdateBlComponent>,private toastr: ToastrService,private BLService:BLService) { }

  AddBL(){
    this.BE.bEId="3fa85f64-5717-4562-b3fc-2c963f66afa9"
    this.Client.ClientId="3fa85f64-5717-4562-b3fc-2c963f66afa9"
    this.BE.client=this.Client
    this.Article.ArticleId="3fa85f64-5717-4562-b3fc-2c963f66afa9"
    this.BE.article=this.Article
    this.BL.BE=this.BE
    this.BLService.AddBL(this.BL,).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog()
      this.toastr.success("Un bon de livraison a été Ajouter");

      },
      (error:any) => console.log(error));  }


  closeDialog(){
    this.dialogRef.close();
    this.BLService.filter('Register click')
 }
  ngOnInit(): void {
    this.BL=this.data;
  }

}
