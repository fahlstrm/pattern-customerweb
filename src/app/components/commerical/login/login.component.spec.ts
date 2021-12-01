import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userStub: any;

  beforeEach(async () => {
    userStub = {
      onSetLoggedIn: () => of(false),
      onSetLoginEvent: () => of(true),
      loginCustomer: () => of()
    }
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{provide: CustomerService, useValue: userStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.loggedIn).toBeFalse();
  });

  it('Login click button should trigger login function', () => {
    const onClickMock = spyOn(component, 'loginClick');
    fixture.debugElement.query(By.css('#loginClick')).triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });
});
