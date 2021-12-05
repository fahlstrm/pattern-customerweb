import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CustomerService } from './customer.service';
import { HttpService } from './http.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpStub: any;

  beforeEach(() => {
    httpStub = {
      githubRedirect: () => of({"login_url":"test.url"}),
      checkUser: () => of({"user_type":"customer","id":"1"}),
      getCustomer: () => of({"id":1,"username":"jannikarlsson","token":null,"funds":"200.00","payment_terms":"prepaid"}),
      getCustomerLog: () => of([{"id":1,"customer_id":2,"scooter_id":230,"start_time":"2021-11-30 18:00:05","end_time":"2021-11-30 18:05:05","start_lat":"58.386184","start_lon":"13.837870","end_lat":"58.394266","end_lon":"13.857240","start_cost":"20.00","travel_cost":"12.50","parking_cost":"20.00","total_cost":"52.50"}])
    }
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [{provide: HttpService, useValue: httpStub}]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call login', () => {
    let spy = spyOn(service, 'setLoggedin')
    service.loginCustomer();
    expect(spy).toHaveBeenCalled();
  });

  it('should check user access', () => {
    let spy = spyOn(service, 'setCustomerId')
    service.checkClick();
    expect(spy).toHaveBeenCalled();
  });

});
