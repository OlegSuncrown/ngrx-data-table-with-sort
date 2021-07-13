import { Action, createReducer, on } from '@ngrx/store';
import * as DataTableActions from './data-table.actions';

export interface HeaderRowItem {
  name: string;
  sort: boolean;
}
export interface DataTableState {
  tableData: any[];
  sortDirection: string;
  sortKey: string;
  headerRow: HeaderRowItem[];
  columnWithSort: string[];
  sortByDateKeys: string[];
}

export const INITIAL_STATE: DataTableState = {
  tableData: [],
  sortDirection: '',
  sortKey: '',
  headerRow: [],
  columnWithSort: [],
  sortByDateKeys: []
};

export const dataTableFeatureKey = 'dataTable';


export const DataTableReducer = createReducer(
  INITIAL_STATE,

  on(DataTableActions.loadDataTables, state => state),

);

