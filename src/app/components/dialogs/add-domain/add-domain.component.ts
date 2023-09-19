import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Domain } from 'src/app/models/Domain';
import { DomainService } from 'src/app/services/DomainService/domain.service';

@Component({
  selector: 'app-add-domain',
  templateUrl: './add-domain.component.html',
  styleUrls: ['./add-domain.component.scss']
})
export class AddDomainComponent implements OnInit {

  
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  domain: Domain=new Domain();

  disableButton: boolean = false;

  constructor(private router:Router,private DomainService:DomainService,private dialogRef: MatDialogRef<AddDomainComponent>,private toastr: ToastrService, private _router:Router) { }
  


  AddDomain(){
    this.disableButton = true;
    this.DomainService.AddDomain(this.domain).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog();
      this.toastr.success("Un domaine a été ajouter");

      },
      (error:any) => console.log(error));  }



      closeDialog(){
        this.dialogRef.close();
        this.DomainService.filter('Register click')

      }


  ngOnInit() {


  }

}


