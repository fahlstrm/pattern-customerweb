import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HistoryTableComponent } from './history-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerService } from 'src/app/services/customer.service';
import { of } from 'rxjs';

describe('HistoryTableComponent', () => {
  let component: HistoryTableComponent;
  let fixture: ComponentFixture<HistoryTableComponent>;
  let customerStub: any;

  beforeEach(waitForAsync(() => {
    customerStub = {
      onSetCustomerLog: () => of([{"id":1,"customer_id":2,"scooter_id":230,"start_time":"2021-11-30 18:00:05","end_time":"2021-11-30 18:05:05","start_lat":"58.386184","start_lon":"13.837870","end_lat":"58.394266","end_lon":"13.857240","start_cost":"20.00","travel_cost":"12.50","parking_cost":"20.00","total_cost":"52.50"}]),
      getCustomerLog: () => of([{"id":1,"customer_id":2,"scooter_id":230,"start_time":"2021-11-30 18:00:05","end_time":"2021-11-30 18:05:05","start_lat":"58.386184","start_lon":"13.837870","end_lat":"58.394266","end_lon":"13.857240","start_cost":"20.00","travel_cost":"12.50","parking_cost":"20.00","total_cost":"52.50"}])
    }
    TestBed.configureTestingModule({
      declarations: [ HistoryTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        HttpClientTestingModule
      ],
      providers: [{provide: CustomerService, useValue: customerStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh', () => {
    component.dataSource.data = [{"id":1,"customer_id":2,"scooter_id":230,"start_time":"2021-11-30 18:00:05","end_time":"2021-11-30 18:05:05","start_lat":"58.386184","start_lon":"13.837870","end_lat":"58.394266","end_lon":"13.857240","start_cost":"20.00","travel_cost":"12.50","parking_cost":"20.00","total_cost":"52.50"}]
    component.dataSource.data.forEach(row => {
      expect(row.start_time).toBeInstanceOf(String)
    })
    component.refresh();
    fixture.detectChanges();
    component.dataSource.data.forEach(row => {
      expect(row.start_time).toBeInstanceOf(Number)
    })
  });
});
