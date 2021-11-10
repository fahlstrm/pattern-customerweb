import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  oauth: string = `Oauth` //Button text 
  constructor() { }

  ngOnInit(): void {
  }


  openDialog() {
    console.log("OpenAuth")
  }
}
