import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should redirect to github for login', () => {
    service.githubRedirect().subscribe();
    const req = httpTestingController.expectOne(service.baseUrl + "/auth/github/redirect");
    expect(req.request.method).toEqual('GET');
  });

  it('should check authorization with backend', () => {
    service.checkUser().subscribe();
    const req = httpTestingController.expectOne(service.baseUrl + "/auth/github/check-usertype");
    expect(req.request.method).toEqual('GET');
  });

  it('should get customer', () => {
    service.getCustomer(1).subscribe();
    const req = httpTestingController.expectOne(service.baseUrl + "/users/1");
    expect(req.request.method).toEqual('GET');
  });

  it('should get customer log', () => {
    service.getCustomerLog(1).subscribe();
    const req = httpTestingController.expectOne(service.baseUrl + "/users/1/logs");
    expect(req.request.method).toEqual('GET');
  });
});
