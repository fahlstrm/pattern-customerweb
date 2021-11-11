import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../utils/dialog/dialog.component';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  oauth: string = `Oauth` //Button text 
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do'];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  openDialog(): void {
    this.dialog.open(DialogComponent, {
      data: "test"
    });
  }
}
