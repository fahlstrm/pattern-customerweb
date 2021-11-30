import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, Subscription, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _customerId: any = [];
  private _loggedIn: any = false;
  private _loginEvent: any = [];
  private customer = new Subject<any>(); 
  private loggedIn = new Subject<any>(); 
  private loginEvent = new Subject<any>(); 


  constructor(
    private httpService: HttpService
  ) { }

  // Get redirected to GitHub to log in
  loginCustomer(): any {
    this.httpService.githubRedirect()
    .subscribe((res) => {
      this.setLoggedin(!this._loggedIn)
      window.open(res.login_url);
    })
  }

  // Continue to the app after logging in
  checkClick(): void {
    this.httpService.checkUser()
    .subscribe((res) => {
      if (res.user_type == "customer") {
        this.setCustomer(res.id);
        this.setLoginEvent("clicked")
      }
    })
  }
    
  setCustomer(customerId: any): any  {
    this._customerId = customerId;
    this.customer.next(this._customerId)
  }

  setLoginEvent(loginEvent: any): any  {
    this._loginEvent = loginEvent;
    this.loginEvent.next(this._loginEvent)
  }

  setLoggedin(loggedIn: any): any  {
    this._loggedIn = loggedIn;
    this.loggedIn.next(this._loggedIn)
  }

  onSetCustomer(): Observable<any> {
    return this.customer.asObservable();
  }

  onSetLoginEvent(): Observable<any> {
    return this.loginEvent.asObservable();
  }

  onSetLoggedIn(): Observable<any> {
    return this.loggedIn.asObservable();
  }

  getCustomerLog(): Observable<any> {
    this.httpService.getCustomerLog(this.customer).subscribe(
      (data:any) => {
        this.customer.next(data)
      }
    )
    
    return this.customer.asObservable();
  }

}
