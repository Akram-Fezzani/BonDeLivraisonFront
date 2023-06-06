import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {AppComponent} from "../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  form: any={};
  isCollapsed = true;
  faCoffee = faCoffee;
  currentUser!:any;
  static instance: NavbarComponent;
  focus:any;
  focus1:any;
  focus2:any;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor(private router: Router ) {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    NavbarComponent.instance = this;
    console.log(this.currentUser);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

 



  goToHome() {
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }
}
