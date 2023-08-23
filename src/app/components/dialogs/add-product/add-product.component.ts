import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/models/Article';
import { collector } from 'src/app/models/collector';
import { UserService } from 'src/app/services/user/user.service';
import { ProductService } from 'src/app/services/ProductService/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  focus3!:any;
  Article: Article=new Article();
  disableButton: boolean = false;

  constructor(private router:Router,private toastr: ToastrService,private ProductService:ProductService, private _router:Router,private dialogRef: MatDialogRef<AddProductComponent>) { }
  


  AddProduct(){
    this.disableButton = true;
    //this.Article.BEId="3fa85f64-5717-4562-b3fc-2c963f66afa6"
    this.ProductService.AddProduct(this.Article).subscribe( (data:any) =>
    {
          console.log(data);
          data.state=true;
          this.closeDialog();
          this.toastr.success("Un Article a était Ajouter");
    },(error:any) => console.log(error));  }

  closeDialog()
    {
        this.dialogRef.close();
    }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
