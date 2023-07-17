import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import { ProductService } from 'src/app/services/ProductService/product.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { AddProductComponent } from '../../dialogs/add-product/add-product.component';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  products:any;
  sortedData:any;
  UserId!:string;
  searchtext='';
  returnedArray!: string[];
  
  constructor(private ProductService:ProductService,private toastr: ToastrService, private dialog: MatDialog,private _router:Router) { }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.products.slice(startItem, endItem);
 }
 allProducts(){
        
    this.ProductService.allProducts().subscribe( (data:any) =>{
      this.products=data;

      },
      (error:any) => console.log(error));  }

  opendialog(){
        const dialogConfig = new MatDialogConfig();
      
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
      
        this.dialog.open(AddProductComponent
          ,{
            height: '4000px',
        width: '6000px',});
       }    

  sortData(sort: Sort) {
        const data = this.allProducts();
        if (!sort.active || sort.direction === '') {
          this.sortedData = data;
          return;
        }
      }

      Delete(UserId:string) {
        this.ProductService.deleteArticle(UserId).subscribe( (data:any) =>{
          this.toastr.error("Un Article a été effacer");
        },
        (error:any) => console.log(error));  }

  ngOnInit(): void {
    this.allProducts();
    this.returnedArray = this.products.slice(0, 5);

  }

}
