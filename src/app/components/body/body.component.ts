import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // loginEvent: any;
  // loginEventSubscription: Subscription;

  loggedIn: boolean = false;
  loggedInSubscription: Subscription;


  
  constructor(
    public customerSerivce: CustomerService
  ) { 
    this.loggedInSubscription = this.customerSerivce.onSetLoggedIn().subscribe(loggedIn => {
      console.log("loggin sub", loggedIn)
      this.loggedIn = loggedIn;
    })
    // this.loginEventSubscription = this.customerSerivce.onSetLoginEvent().subscribe(loginEvent => {
    //   console.log("event i body", loginEvent)
    //   this.loginEvent = loginEvent;
    // })
  }


  ngOnInit(): void {
  }

}
