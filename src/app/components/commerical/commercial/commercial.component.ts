import { Component, OnInit, HostBinding, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../utils/dialog/dialog.component';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items';
  
  myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do'];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  //Check if theres a array typeScript
  images: any = [
    {src: `assets/images/okai-vehicles-1-unsplash.jpg`, alt: `Scooter image / Okai` },
    {src: `assets/images/okai-vehicles-3-unsplash.jpg`, alt: `Scooter image / Okai` },
    {src: `assets/images/okai-vehicles-2-unsplash.jpg`, alt: `Scooter image / Okai` },
  ]


  openLoginDialog(): void {
    this.dialog.open(DialogComponent, {
      data: "test"
    });
  }
}
