import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {AppComponent} from "../../app.component";
import { Router } from '@angular/router';

@Component({
  animations: [
    trigger('rotatedState', [
      transition(':enter', [
        style({ opacity: 0 }),
        style({ transform: 'rotate(-90deg)' }),
        animate('100ms', style({ opacity: 1 })),
        animate('300ms', style({ transform: 'rotate(0)' }))
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 })),
      ])
    ]),
    trigger('enterSlow', [
      transition(':enter', [
        style({ display: 'none' }),
        animate('200ms', style({ display: 'inherit' }))
      ])
    ])
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: any={};
  isLoginFailed =false;
  errorMessage = '';
  static instance:any;

  constructor( private router: Router) { }




  ngOnInit(): void {
  }



}
