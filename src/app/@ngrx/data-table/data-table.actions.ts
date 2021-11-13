import { createAction, props } from '@ngrx/store';

enum Actions {
  SET_DATA_TABLE = '[Data Table] Set Table Data',
  SET_SORT_KEY = '[Data Table] Set Sort Key',
  RESET_DATATABLE_STORE = '[Data Table] Reset Store',
  SET_FILTER_BY = '[Data Table] Set Filter By Properties and Query', 
}

export const setData = createAction(Actions.SET_DATA_TABLE, props<{ data: any[] }>());
export const setSortKey = createAction(Actions.SET_SORT_KEY, props<{ sortKey: string }>());
export const resetDataTableStore = createAction(Actions.RESET_DATATABLE_STORE);
export const setFilterBy = createAction(Actions.SET_FILTER_BY, props<{ filters: { filterBy: string[]; query: string } }>()); 




