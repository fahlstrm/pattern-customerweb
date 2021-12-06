import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items';

  constructor( ) { 
  }

  ngOnInit(): void {
    console.log("i history")
  }

}
