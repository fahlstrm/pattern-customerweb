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

}
