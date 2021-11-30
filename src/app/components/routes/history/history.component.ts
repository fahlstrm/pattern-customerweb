import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(
    public customerSerivce: CustomerService,
  ) { 
  }

  ngOnInit(): void {
  }

}
