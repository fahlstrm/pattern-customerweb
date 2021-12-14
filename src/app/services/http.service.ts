import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  // Get specific customer 
  getCustomer(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`, { withCredentials: true });
  }

  // Get log for specific customer
  getCustomerLog(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}/logs`, { withCredentials: true });
  }


  // Redirects user to GitHub for login
  githubRedirect(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/github/redirect`);
  }

  // Checks if user is authorized
  checkUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/github/check-usertype`, { withCredentials: true });
  }

  // Sets payment terms and funds for user
  setPaymentTerms(user: any, terms: any, money: any): any {
    const body = {
      "payment_terms": terms,
      "funds": money
    }
    return this.http.put<any>(`${this.baseUrl}/users/${user}`, body, { withCredentials: true })
    .subscribe({
      next: res => {
        return res;
      },
      error: error => {
        console.error('There was an error!', error);
        console.log("ERROR")
      }
    });
  }

}
