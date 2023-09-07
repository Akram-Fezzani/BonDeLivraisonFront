import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from '../../services/user/user.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { BuildingByCenter } from 'src/app/models/BuildingByCenter';


import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { User } from 'src/app/models/User';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AntenneService } from 'src/app/services/AntennaService/antenne.service';
import { AddCollectorComponent } from '../dialogs/add-collector/add-collector.component';
import { ChefcenterService } from 'src/app/services/ChefCenterService/chefcenter.service';
import { AddDemandevetoComponent } from '../dialogs/add-demandeveto/add-demandeveto.component';
import { UserStat } from 'src/app/models/UserStats';
import * as Chart from 'chart.js';
import { StatsService } from 'src/app/services/StatsService/stats.service';

@Component({
  selector: 'app-antenna-stats',
  templateUrl: './antenna-stats.component.html',
  styleUrls: ['./antenna-stats.component.scss']
})
export class AntennaStatsComponent implements OnInit {
  currentUser!: User;
  Id:any;
  currentcenter:any;
  Contributors:any;
  nbrActiveUsers!:number;
  rotationActuelle!:number;
  usefulSurface!:number;
  antennaLabel!:any;
  nbrcollectors!:number;
  antenna!:any;
  users:any;
  collectors:any;
  public canvas1 : any;
  public ctx1:any;
  public canvas2 : any;
  public ctx2:any;
  public canvas3 : any;
  public ctx3:any;
  public datasets: any;
  public myChartData:any;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  
  constructor(private us:UserService,private statsService:StatsService, private dialog: MatDialog,private _router:Router,private AntennaService:AntenneService,private authService: AuthService,private cs:CenterServiceService,private ts:TokenStorageService, private ChefService:ChefcenterService) { }


  vet(){
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    this.dialog.open(AddDemandevetoComponent
      ,{
        height: '-4000px',
    width: '6000px',});
   }
 

  getcurrentuser(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
     this.currentUser=r;
    this.Id=r.centreId;

    this.cs.getCenter(r.centreId).subscribe((x:any)=>{
      this.currentcenter=x;
      this.rotationActuelle=this.currentcenter.rotationActuelle;
      this.usefulSurface=this.currentcenter.usefulSurface;

      this.cs.getnumberofcollectors(r.centreId).subscribe( (data:any) =>{
        this.nbrcollectors=data;
        this.cs.collectors().subscribe( (data:any) =>{
          this.collectors=data;

          this.AntennaService.antenna(r.centreId).subscribe( (data:any) =>{

            this.antenna=data;
            this.antennaLabel=data.antennaLabel; 
  
            },
            (error:any) => console.log(error)); 
    },(error:any) => console.log(error));  
    },(error:any) => console.log(error));     
    },(error:any) => console.log(error));
    },(error:any) => console.log(error));
    
    }



 opendialog(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(AddCollectorComponent
    ,{height: '4000px',
  width: '6000px',});
 }


    getnumberofcollectors(id :string){
    this.cs.getnumberofcollectors(id).subscribe( (data:any) =>{
      this.nbrActiveUsers = data;
      this.nbrcollectors=data;
       },
      (error:any) => console.log(error)); }


    

      getcenter(id :string){
        
        this.us.getCenter(id).subscribe( (data:any) =>{

          this.users=data;

          },
          (error:any) => console.log(error));  }
     

      chefcenters(){
        
        this.us.chefcenters().subscribe( (data:any) =>{
          this.users=data;

          },
          (error:any) => console.log(error));  }



  

  ngOnInit(): void {
    this.getcurrentuser();

    //console.log(this.currentcenter);
    //this.chefcenters();
    //this.getcurrentcenter();
   




    this.canvas1 = document.getElementById("chartLineRed");
    this.ctx1 = this.canvas1.getContext("2d");



    this.canvas2 = document.getElementById("chartLineGreen");
    this.ctx2 = this.canvas2.getContext("2d");




this.canvas3 = document.getElementById("CountryChart");
this.ctx3 = this.canvas3.getContext("2d");

    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    var gradientStroke = this.ctx1.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
    this.statsService.getUserPostStats().subscribe((response:UserStat) =>{
      //console.log(response);

    var data = {
      labels: response.roles,
      datasets: [{
        label: "Users by role",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 5,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: response.users,
      }]
    };


    var myChart = new Chart(this.ctx1, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });



  },error => console.log(error));

  const id=this.ts.getId()+"";
  this.authService.getcurrentuser(id,).subscribe((r:any)=>{
   this.currentUser=r;
  this.Id=r.centreId;

  this.statsService.BuildingByCenterByAntennaId(this.Id).subscribe((response:BuildingByCenter) =>{
  var myChart = new Chart(this.ctx2, {
    type: 'bar',

    data: {
      labels: response.centers,
      datasets: [{
        label: "Batiments Par Centre",
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: '#1f8ef1',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: response.buildings,
      }]
    },
    options: gradientBarChartConfiguration
  });

},(error:any) => console.log(error));
},(error:any) => console.log(error));



gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors


this.statsService.getUserPostStats().subscribe((response:UserStat) =>{
 // console.log(response);

var data = {
  labels: response.roles,
  datasets: [{
    label: "My First dataset",
    fill: true,
    backgroundColor: gradientStroke,
    borderColor: '#00d6b4',
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: '#00d6b4',
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: '#00d6b4',
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: response.users,
  }]
};

var myChart = new Chart(this.ctx3, {
  type: 'line',
  data: data,
  options: gradientChartOptionsConfigurationWithTooltipGreen

});


var gradientStroke = this.ctx3.createLinearGradient(0, 230, 0, 50);
},error => console.log(error));




  }

}
function UserPostStats(response: any, UserPostStats: any) {
  throw new Error('Function not implemented.');
}

