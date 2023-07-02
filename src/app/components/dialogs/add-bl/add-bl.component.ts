import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bl',
  templateUrl: './add-bl.component.html',
  styleUrls: ['./add-bl.component.scss']
})
export class AddBlComponent implements OnInit {
  date = new Date();

  constructor(private dialogRef: MatDialogRef<AddBlComponent>) { }



  closeDialog(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
