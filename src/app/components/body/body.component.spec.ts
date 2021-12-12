import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BodyComponent } from './body.component';
import { CustomerService } from 'src/app/services/customer.service';
import { of } from 'rxjs';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;
  let customerStub: any;

  beforeEach(async () => {
    customerStub = {
      onSetLoginEvent: () => of(true)
    }
    await TestBed.configureTestingModule({
      declarations: [ BodyComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [{provide: CustomerService, useValue: customerStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
