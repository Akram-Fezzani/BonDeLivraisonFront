import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/User';
import { Veto } from 'src/app/models/Veto';
import { VetoService } from 'src/app/services/VetoService/veto.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';

@Component({
  selector: 'app-veto-by-antenna-table',
  templateUrl: './veto-by-antenna-table.component.html',
  styleUrls: ['./veto-by-antenna-table.component.scss']
})
export class VetoByAntennaTableComponent implements OnInit {
  color = '#202454'
  Vetos:any;
  currentUser!: User;
Id:any;
displayedColumns = ['username','firstName', 'lastName', 'antennaId', 'email','phone','state'];
  dataSource: MatTableDataSource<Veto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ts:TokenStorageService,private authService: AuthService,private VetoService:VetoService) {
    this.getVetos()
    this.dataSource = new MatTableDataSource(this.Vetos);

  }
 


  getVetos(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
        this.currentUser=r;
        this.Id=r.centreId;  
    this.VetoService.getVetoByAntenna(this.Id).subscribe( (data:any) =>{
      this.Vetos=data;
     // console.log(data)
      this.dataSource = new MatTableDataSource(this.Vetos);

    },
    (error:any) => console.log(error));  
}, (error:any) => console.log(error));  }


  ngOnInit(): void {
    this.getVetos();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}


}








