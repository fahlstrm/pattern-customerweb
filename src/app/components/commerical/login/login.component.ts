import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  btnText = "GitHub";

  loggedIn: boolean = false;
  loggedInSubscription: Subscription;


  constructor(
    public customerSerivce: CustomerService,
  ) {
    this.loggedInSubscription = this.customerSerivce.onSetLoggedIn().subscribe(loggedIn => {
      console.log("loggin sub", loggedIn)
      this.loggedIn = loggedIn;
    })
   }

  ngOnInit(): void {
  }

  loginClick() {
    this.customerSerivce.loginCustomer();
  }

  checkClick() {
    this.customerSerivce.checkClick();
  }

}
