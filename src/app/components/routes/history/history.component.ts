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
  customerLog: boolean = false;
  customerSubscription: Subscription;

  constructor(
    public customerSerivce: CustomerService,
  ) { 
    this.customerSubscription = this.customerSerivce.getCustomerLog().subscribe(log => {
      console.log("log", log)
      this.customerLog = log;
    })
  }

  ngOnInit(): void {
  }

}
