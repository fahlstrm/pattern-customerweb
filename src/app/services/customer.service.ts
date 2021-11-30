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
  private customerId = new Subject<any>(); 
  private customerLog = new Subject<any>(); 
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
    console.log("i checkClick")
    this.httpService.checkUser()
    .subscribe((res) => {
      if (res.user_type == "customer") {
        this.setCustomerId(res);
        this.getCustomer(res.id);
        this.setLoginEvent("clicked")
      }
    })
  }
  
  // Set customer
  setCustomerId(customerId: any): any  {
    this._customerId = customerId;
    this.customerId.next(this._customerId)
  }

  setLoginEvent(loginEvent: any): any  {
    this._loginEvent = loginEvent;
    this.loginEvent.next(this._loginEvent)
  }

  setLoggedin(loggedIn: any): any  {
    this._loggedIn = loggedIn;
    this.loggedIn.next(this._loggedIn)
  }

  onSetCustomerId(): Observable<any> {
    return this.customerId.asObservable();
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

  getCustomer(id: any): Observable<any> {
    this.httpService.getCustomer(id).subscribe(
      (data:any) => {
        console.log(data)
        this.customer.next(data)
      }
    )
    return this.customer.asObservable();
  }

  // Get log for specific customer
  getCustomerLog(): Observable<any> {
    this.httpService.getCustomerLog(this.customerId).subscribe(
      (data:any) => {
        this.customerLog.next(data)
      }
    )
    return this.customerLog.asObservable();
  }

}
