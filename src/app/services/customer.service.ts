import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, Subscription, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _user: any = [];
  private user = new Subject<any>(); 

  constructor(
    private httpService: HttpService
  ) { }

    
  setUser(user: any): any  {
    this._user = user;
    this.user.next(this._user)
  }

  onSet(): Observable<any> {
    return this.user.asObservable();
  }

}
