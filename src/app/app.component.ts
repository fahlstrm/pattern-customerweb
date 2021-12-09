import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ="customerweb";

  auth = false;

  constructor(
    public customerService: CustomerService,
    public httpService: HttpService
  ) {}

  ngOnInit(): void {
    // Checks if user has already logged in when page is reloaded
    this.checkClick()
  }

  // Checks if user is authorized
  checkClick(): void {
    this.httpService.checkUser()
    .subscribe((res) => {
      if (res.user_type == "customer") {
        this.customerService.setCustomerId(res.id);
        this.auth = true;
      }
    });
  }

  // Changes variable to show new screen when login has been initiated
  loginClick(): void {
    this.auth = !this.auth;
  }
  // auth: boolean = false; //Adjusts commercial view or logged in view with nav in body-component
}
