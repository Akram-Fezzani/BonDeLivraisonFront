import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss']
})
export class CountsComponent implements OnInit {
  nbrActiveUsers!:number;
  nbrchefs!:number;
  nbradmins!:number;
  nbrUsers!:number;
  constructor(private us:UserService,private elementRef: ElementRef, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }
 

  getnumberofusers(){
    this.us.getnumberofusers().subscribe( (data:any) =>{
      this.nbrUsers = data;
      },
      (error:any) => console.log(error));  }
  getnumberofactiveusers(){
    this.us.getnumberofactiveusers().subscribe( (data:any) =>{
      this.nbrActiveUsers = data;
       },
      (error:any) => console.log(error));  }

  getnumberofchefs(){
        this.us.getnumberofchefs().subscribe( (data:any) =>{
          this.nbrchefs = data;
           },
          (error:any) => console.log(error));  }
    
  getnumberoadmins(){
            this.us.getnumberofadmins().subscribe( (data:any) =>{
              this.nbradmins = data;
               },
              (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getnumberofusers();
    this.getnumberofactiveusers();
    this.getnumberofchefs();
    this.getnumberoadmins();
  }

}
