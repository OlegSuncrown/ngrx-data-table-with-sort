import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDataTable from './data-table.reducer';

export const selectDataTableState = createFeatureSelector<fromDataTable.DataTableState>(
  fromDataTable.dataTableFeatureKey
);
