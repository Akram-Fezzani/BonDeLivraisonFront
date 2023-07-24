import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
//import Chart from 'chart.js';

import { UserService } from 'src/app/services/user/user.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import * as Chart from 'chart.js';
import { UserStat } from 'src/app/models/UserStats';
import { BuildingByCenter } from 'src/app/models/BuildingByCenter';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']

})
export class UserStatsComponent implements OnInit {
  Trainers:any;
  Contributors:any;
  nbrActiveUsers!:number;
  nbrchefs!:number;
  nbradmins!:number;
  nbrUsers!:number;
  users:any;
  centers:any;
  antennas:any;
  sortedData:any;
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
  constructor(private us:UserService,private elementRef: ElementRef, private cs:CenterServiceService,private dialog: MatDialog,private _router:Router) { }

  ngAfterViewInit() {
    //this.elementRef.nativeElement.ownerDocument
       // .body.style.backgroundColor = '#fdfd96';
}
message = "ekhdmi";
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
        

 /* getcenter(id :string){
        
        this.us.getCenter(id).subscribe( (data:any) =>{

          this.users=data;

          },
          (error:any) => console.log(error));  }*/
     
  



 



 



  ngOnInit(): void {


    this.getnumberofusers();
    this.getnumberofactiveusers();
    this.getnumberofchefs();
    this.getnumberoadmins();


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
    this.us.getUserPostStats().subscribe((response:UserStat) =>{
      console.log(response);

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


  this.cs.BuildingByCenter().subscribe((response:BuildingByCenter) =>{
    console.log(response);
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

},error => console.log(error));




gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors


this.us.getUserPostStats().subscribe((response:UserStat) =>{
  console.log(response);

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

