import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

// import { HistoryTableDataSource, HistoryTableItem } from './history-table-datasource';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!:  MatTable<any>;
  dataSource = new MatTableDataSource<any>();
  customerLogSubscription: Subscription;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'payment_terms', 
    'scooter_id', 
    'start_time', 
    'end_time', 
    'start_cost', 
    'travel_cost', 
    'parking_cost', 
    'total_cost'];
  logs: any = [];

  constructor(
    public customerService: CustomerService,
  ) {
    this.customerLogSubscription = this.customerService.getCustomerLog().subscribe(resources => {
      this.dataSource.data = resources; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  refresh() {
    this.dataSource.data.forEach(row => {
      row.start_time = Date.parse(row.start_time);
      row.end_time = Date.parse(row.end_time);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.data.forEach(row => {
      row.start_time = Date.parse(row.start_time);
      row.end_time = Date.parse(row.end_time);
    })
  }
}
