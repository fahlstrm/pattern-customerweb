import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface HistoryTableItem {
  id: number;
  scoter: number;
  startTime: string;
  endTime: string;
  startPosition: string;
  endPosition: string;
  travelCost: string;
  parkingCost: string;
  totalCost: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: HistoryTableItem[] = [
  {id: 1, scoter: 1, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 25.5},
  {id: 2, scoter: 525, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 60.1},
  {id: 3, scoter: 97, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 105},
  {id: 4, scoter: 323, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 85.5},
  {id: 5, scoter: 3, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 22},
  {id: 6, scoter: 24, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 63.3},
  {id: 7, scoter: 104, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 52},
  {id: 8, scoter: 61, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 3},
  {id: 9, scoter: 17, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 44},
  {id: 10, scoter: 439, startTime:' ', endTime: '', startPosition: ' ', endPosition: ' ', travelCost: ' ', parkingCost: ' ', totalCost: 85.77},
];

/**
 * Data source for the HistoryTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class HistoryTableDataSource extends DataSource<HistoryTableItem> {
  data: HistoryTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<HistoryTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: HistoryTableItem[]): HistoryTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: HistoryTableItem[]): HistoryTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'scoter': return compare(a.scoter, b.scoter, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'totalCost': return compare(+a.totalCost, +b.totalCost, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
