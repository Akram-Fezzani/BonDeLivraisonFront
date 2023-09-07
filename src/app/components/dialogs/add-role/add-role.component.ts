import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { collector } from 'src/app/models/collector';
import { Role } from 'src/app/models/Role';
import { RoleService } from 'src/app/services/RoleService/role.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  isCollapsed = true;
  focus!:any;
  focus1!:any;
  focus2!:any;
  collector: collector=new collector();
  role: Role=new Role();

  disableButton: boolean = false;

  constructor(private router:Router,private rs:RoleService,private dialogRef: MatDialogRef<AddRoleComponent>,private toastr: ToastrService,private us:UserService, private _router:Router) { }
  


  AddRole(){
    this.disableButton = true;
    this.rs.AddRole(this.role).subscribe( (data:any) =>{
      //console.log(data);
      data.state=true;
      this.closeDialog();
      this.toastr.success("Un Role a été ajouter");

      },
      (error:any) => console.log(error));  }



      closeDialog(){
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
