import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let customerStub: any;

  beforeEach(async () => {
    customerStub = {
      getCustomer: () => of([{"id":1,"username":"jannikarlsson","funds":"800.00","payment_terms":"prepaid"}]),
      setTerms: () => of()
    }
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ FormBuilder, {provide: CustomerService, useValue: customerStub} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change payment terms', () => {
    component.isChecked = true;
    component.customer[0].payment_terms = "invoice";
    fixture.detectChanges();
    component.paymentTerms();
    expect(component.customer[0].payment_terms).not.toEqual("invoice");
  });

  it('should add money', () => {
    component.amount = 100;
    component.customer[0].funds = "200";
    fixture.detectChanges();
    component.saveAmount();
    expect(component.customer[0].funds).toEqual('300.00');
  });
});
