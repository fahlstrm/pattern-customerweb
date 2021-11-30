import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  getCustomerLog(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}/logs`);
  }

  // Redirects user to GitHub for login
  githubRedirect(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/github/redirect`);
  }

  // Checks if user is authorized
  checkUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/github/check-usertype`, { withCredentials: true });
  }

}
