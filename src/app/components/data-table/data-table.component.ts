import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTableState, HeaderRowItem } from 'src/app/models/data-table';

// NgRx
import { Store } from '@ngrx/store';
import * as dataTableActions from 'src/app/@ngrx/data-table/data-table.actions';
import * as dataTableSelectors from 'src/app/@ngrx/data-table/data-table.selectors';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() data!: any[];
  @Input() headerRow!: HeaderRowItem[];

  public sortDirection$!: Observable<string>;
  public sortKey$!: Observable<string>;
  public tableData$!: Observable<any>;

  constructor(private store: Store<DataTableState>) {}

  ngOnInit(): void {
    // DISPATCH
    this.store.dispatch(dataTableActions.setData({ data: this.data }));

    // SELECTORS
    this.tableData$ = this.store.select(dataTableSelectors.selectSortedData);
    this.sortKey$ = this.store.select(dataTableSelectors.selectSortKey);
    this.sortDirection$ = this.store.select(dataTableSelectors.selectSortDirection);
  }

  ngOnDestroy(): void {
    this.store.dispatch(dataTableActions.resetDataTableStore());
  }

  public onSort(headerItem: HeaderRowItem): void {
    if (!headerItem.hasSort) {
      return;
    }
    const sortKey = headerItem.key;
    this.store.dispatch(dataTableActions.setSortKey({ sortKey: sortKey }));
  }
}
