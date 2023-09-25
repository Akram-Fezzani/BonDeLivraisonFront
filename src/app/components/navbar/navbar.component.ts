import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import { User } from "src/app/models/User";
import { Howl } from "howler";
import { UserService } from "src/app/services/user/user.service";
import { TokenStorageService } from "src/app/services/tokenstorageservice/token-storage.service";
import { NotificationForum } from "src/app/models/NotificationForum";
import { NotificationService } from "src/app/services/notification/notification.service";
import { ChatMessage } from "src/app/models/ChatMessage";
import { WebsocketService } from "src/app/services/websocket/websocket.service";
import { AuthService } from 'src/app/services/authservice/auth.service';
import { interval } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  form: any={};
  result!: User;
  notifSound = new Howl({
    src: ['assets\\sounds\\notifSound.mp3']
  });
  isCollapsed = true;
  Id:any;
  faCoffee = faCoffee;
  currentUser!:any;
  static instance: NavbarComponent;
  focus:any;
  focus1:any;
  focus2:any;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  notViewdNotifs: number = 0;
  openedNotif: boolean = false;
  notifs: NotificationForum [] = [];
  public countsColor: string = "red";
  nbrntf!:any;

  constructor(private us: UserService,private router: Router,private authService: AuthService,private tokenStorage:TokenStorageService,private websocketService:WebsocketService, private notificationService:NotificationService) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  reloadFromWebSocket(message:any) {
    this.notificationService.getNotfiById(message).subscribe((r:NotificationForum)=> {
      this.notifSound.play();
      this.notViewdNotifs++;
      this.notifs.unshift(r);
    },);
  }
  ngOnInit() {
   

    
    
      const obs$ = interval(1000);
      obs$.subscribe((d)=>{

        this.notifications();

      });

      const ovs$ = interval(2000);
      ovs$.subscribe((d)=>{

        this.notificationss();
      });
      const oms$ = interval(2000);
      oms$.subscribe((d)=>{
      if((this.nbrntf- this.notViewdNotifs) >0)
      {
        this.notifSound.play();
      }
    });

     
  }
 
   

  notifications(){   
    const id=this.tokenStorage.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
            this.currentUser=r;
            this.Id=r.userId;
            if(this.currentUser != null) {
            this.notificationService.Notiflist(this.Id).subscribe((r:NotificationForum[]) => {
              //this.notifSound.play();

              this.notViewdNotifs = 0;

            for(let not of r) {
              if (!not.viewed) {
                 this.notViewdNotifs++;
              }
            }
          this.notifs = r;

          },(error: any) => console.log(error));
        }
    }, (error:any) => console.log(error));  
  }


  notificationss(){   
    const id=this.tokenStorage.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
            this.currentUser=r;
            this.Id=r.userId;
            if(this.currentUser != null) {
            this.notificationService.Notiflist(this.Id).subscribe((r:NotificationForum[]) => {
              //this.notifSound.play();

              this.nbrntf = 0;

            for(let not of r) {
              if (!not.viewed) {
                 this.nbrntf++;
              }
            }
          this.notifs = r;

          },(error: any) => console.log(error));
        }
    }, (error:any) => console.log(error));  
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  signOut() {
  
    this.goToHome();
    this.router.navigate(['/login'])

    this.tokenStorage.clearLocalStorage();  }

  getUserByusername(){
this.us.getUserByusername(this.form.search).subscribe((r:any)=>{
  this.result= r;
},(error:any) => console.log(error));

}


  goToHome() {
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }

  setCurrentUser(currentUser: any) {
    this.currentUser = currentUser;
    this.websocketService.navBarComp.subscribe((message:ChatMessage) => {
      this.reloadFromWebSocket(message);
    });
  }

  viewAll() {
    this.notViewdNotifs = 0;
    for(let notif of this.notifs) {
      notif.viewed = true;
      this.notificationService.updateNotif(notif).subscribe(()=>{

      },error => console.log(error));
    }
  }

  clearAllNotifications($event: MouseEvent) {
    const id=this.tokenStorage.getId()+"";
    this.authService.getcurrentuser(id,).subscribe((r:any)=>{
            this.currentUser=r;
            this.Id=r.userId;
      this.notificationService.deleteAllNotif(this.Id).subscribe(()=>{
        this.ngOnInit();
      },(error: any) => console.log(error));
}, (error:any) => console.log(error));  }

  viewOne(ntf: NotificationForum) {
    ntf.hovored = true;
    this.notificationService.updateNotif(ntf).subscribe(()=>{
    },error => console.log(error));
  }

  deleteNotif(ntf: String) {
    this.notificationService.deleteNotif(ntf).subscribe((r:any)=>{
    this.ngOnInit();
    },(error: any) => console.log(error));  }

  changeDashboardColor(color: string){
    var body = document.getElementsByTagName('body')[0];
    if (body && color === 'white-content') {
        body.classList.add(color);
    }
    else if(body.classList.contains('white-content')) {
      body.classList.remove('white-content');
    }
  }

  changecountsColor(color: string){
    var counts = document.getElementsByClassName('counts')[0];
    var mainPanel = document.getElementsByClassName('main-panel')[0];

    this.countsColor = color;

    if(counts != undefined){
      counts.setAttribute('data',color);
    }
    if(mainPanel != undefined){
        mainPanel.setAttribute('data',color);
    }
  }

}