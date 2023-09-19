import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/Article';
import { BE } from 'src/app/models/BE';
import { BL } from 'src/app/models/BL';
import { Client } from 'src/app/models/Client';

import { BLService } from 'src/app/services/BLService/bl.service';

@Component({
  selector: 'app-add-bl',
  templateUrl: './add-bl.component.html',
  styleUrls: ['./add-bl.component.scss']
})
export class AddBlComponent implements OnInit {
  date = new Date();
  BL: BL=new BL();
  BE: BE=new BE();
  Client:Client=new Client();
  Article:Article=new Article();
  disableButton: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddBlComponent>,private toastr: ToastrService,private BLService:BLService) { }

  AddBL(){
    this.BE.BEId="3fa85f64-5717-4562-b3fc-2c963f66afa9"
    this.Client.ClientId="3fa85f64-5717-4562-b3fc-2c963f66afa9"
    this.BE.Client=this.Client
    this.Article.ArticleId="3fa85f64-5717-4562-b3fc-2c963f66afa9"
    this.BE.Article=this.Article
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
    
  }

}
