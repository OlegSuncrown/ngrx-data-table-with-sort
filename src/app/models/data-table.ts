export interface User {
  id: number;
  name: string;
  username: string;
  city: string;
}

export interface DataTableState {
  tableData: any[];
  sortDirection: string;
  sortKey: string;
  filterQuery: string;
  filterBy: string[];
}

export interface HeaderRowItem {
  displayName: string;
  key: string;
  hasSort: boolean;
}
