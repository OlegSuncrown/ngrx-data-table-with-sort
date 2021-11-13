import { Action, createReducer, on } from '@ngrx/store';
import * as DataTableActions from './data-table.actions';
import { DataTableState } from 'src/app/models/data-table';

export const INITIAL_FILTER_KEY = { filterKey: '', query: '' } 

export const INITIAL_STATE: DataTableState = {
  tableData: [],
  sortDirection: '',
  sortKey: '',
  filterQuery: '', 
  filterBy: [] 
};

export const dataTableFeatureKey = 'dataTable';


export const dataTableReducer = createReducer(
  INITIAL_STATE,
  on(DataTableActions.setData, (state, { data }) => {
    return {
      ...state,
      tableData: data
    };
  }),

  on(DataTableActions.setSortKey, (state, { sortKey }) => {
    sortKey = sortKey?.toLowerCase();

    let sortDirection;
    if (sortKey !== state.sortKey) {
      sortDirection = 'asc';
    } else {
      sortDirection = setSortDirection(state.sortDirection);
    }
    return {
      ...state,
      sortKey,
      sortDirection
    };
  }),

  on(DataTableActions.resetDataTableStore, state => {
    return {
      ...state,
      ...INITIAL_STATE
    };
  }),

  on(DataTableActions.setFilterBy, (state, { filters }) => { 
    return { 
      ...state, 
      sortDirection: '', 
      sortKey: '', 
      filterQuery: filters.query, 
      filterBy: filters.filterBy 
    }; 
  }), 
);

export function DataTableReducer(state: DataTableState, action: Action) {
  return dataTableReducer(state, action);
}

// Utils
export function setSortDirection(sortDirection: string): string {
  switch (sortDirection) {
    case 'asc':
      return 'desc';
    case 'desc':
      return '';
    case '':
      return 'asc';
    default:
      return '';
  }
}