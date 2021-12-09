import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ="customerweb";

  auth = false;

  constructor(

  ) {}

  ngOnInit(): void {
  }




  // auth: boolean = false; //Adjusts commercial view or logged in view with nav in body-component
}
