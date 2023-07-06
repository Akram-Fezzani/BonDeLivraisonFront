import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-be',
  templateUrl: './add-be.component.html',
  styleUrls: ['./add-be.component.scss']
})
export class AddBeComponent implements OnInit {

  date = new Date();

  constructor(private dialogRef: MatDialogRef<AddBeComponent>) { }



  closeDialog(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
