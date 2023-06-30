import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  contentArray: string[] = new Array(50).fill('');
  returnedArray!: string[];
  showBoundaryLinks: boolean = true;
  showDirectionLinks: boolean = true;
  constructor() {}

  pageChanged(event: PageChangedEvent): void {
     const startItem = (event.page - 1) * event.itemsPerPage;
     const endItem = event.page * event.itemsPerPage;
     this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
  ngOnInit(): void {
     this.contentArray = this.contentArray.map((v: string, i: number) => {
        return 'Line '+ (i + 1);
     });
     this.returnedArray = this.contentArray.slice(0, 5);
  }
}