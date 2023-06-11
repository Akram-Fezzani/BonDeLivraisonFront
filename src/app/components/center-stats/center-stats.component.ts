import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CenterServiceService } from 'src/app/services/CenterService/center-service.service';
import { UserService } from '../../services/user/user.service';
import { AuthService } from 'src/app/services/authservice/auth.service';
import { TokenStorageService } from 'src/app/services/tokenstorageservice/token-storage.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-center-stats',
  templateUrl: './center-stats.component.html',
  styleUrls: ['./center-stats.component.scss']
})
export class CenterStatsComponent implements OnInit {
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
  constructor(private us:UserService, private _router:Router,private authService: AuthService,private cs:CenterServiceService,private ts:TokenStorageService) { }



  getcurrentuser(){
    const id=this.ts.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
     this.currentUser=r;
     //console.log(r);
    this.Id=r.centreId;
    console.log(this.Id);

    this.cs.getCenter(r.centreId).subscribe((x:any)=>{
      this.currentcenter=x;
      console.log(this.currentcenter);
      this.rotationActuelle=this.currentcenter.rotationActuelle;
      console.log(this.rotationActuelle);
      this.usefulSurface=this.currentcenter.usefulSurface;

      this.cs.getnumberofcollectors(r.centreId).subscribe( (data:any) =>{
        this.nbrActiveUsers = data;
        this.nbrcollectors=data;
        console.log(data);
        this.cs.collectors().subscribe( (data:any) =>{
          this.collectors=data;
          console.log(this.collectors);

          this.cs.antenna(r.centreId).subscribe( (data:any) =>{

            this.antenna=data;
            this.antennaLabel=data.antennaLabel; 
            console.log(this.antenna);
  
            },
            (error:any) => console.log(error)); 
    },(error:any) => console.log(error));  
    },(error:any) => console.log(error));     
    },(error:any) => console.log(error));
    },(error:any) => console.log(error));
    
    }


 


    getnumberofcollectors(id :string){
    this.cs.getnumberofcollectors(id).subscribe( (data:any) =>{
      this.nbrActiveUsers = data;
      this.nbrcollectors=data;
      console.log(data);
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
          console.log(this.Contributors);

          },
          (error:any) => console.log(error));  }



  

  ngOnInit(): void {
    this.getcurrentuser();
    console.log(this.currentcenter.rotationActuelle);

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
   


 





gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors









  }

}
function UserPostStats(response: any, UserPostStats: any) {
  throw new Error('Function not implemented.');
}

