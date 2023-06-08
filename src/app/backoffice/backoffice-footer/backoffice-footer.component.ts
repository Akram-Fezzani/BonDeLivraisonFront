import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice-footer',
  templateUrl: './backoffice-footer.component.html',
  styleUrls: ['./backoffice-footer.component.scss']
})
export class BackofficeFooterComponent implements OnInit {

  test : Date = new Date();

  constructor() { }

  ngOnInit() {
  }
}
