import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { CustomerService } from 'src/app/services/customer.service';
import { HttpService } from 'src/app/services/http.service';

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

  @Input() auth: boolean = false;
  
  constructor(
    public customerService: CustomerService,
    public httpService: HttpService
  ) { 
    this.loggedInSubscription = this.customerService.onSetLoginEvent().subscribe(loggedIn => {
      console.log("loggin sub", loggedIn)
      this.loggedIn = loggedIn;
    })
    // this.loginEventSubscription = this.customerSerivce.onSetLoginEvent().subscribe(loginEvent => {
    //   console.log("event i body", loginEvent)
    //   this.loginEvent = loginEvent;
    // })
  }


  ngOnInit(): void {
    // Checks if user has already logged in when page is reloaded
    this.checkClick();

  }

  // Checks if user is authorized
  checkClick(): void {
    console.log("i check Click")
    this.httpService.checkUser()
    .subscribe((res: any) => {
      console.log(res)
      if (res.user_type == "admin" || res.user_type == "customer") {
        this.customerService.setCustomerId(res.id);
        this.loggedIn = true;
      }
    });
  }

  // Changes variable to show new screen when login has been initiated
  loginClick(): void {
    this.loggedIn = !this.loggedIn;
  }
}
