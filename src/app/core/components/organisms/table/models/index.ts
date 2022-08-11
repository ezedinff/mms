export type TableActionType =
  | 'create'
  | 'expand'
  | 'edit'
  | 'delete'
  | 'approve'
  | 'reject'
  | 'view'
  | 'refresh'
  | 'filter'
  | null;

export interface TableAction {
  name: string;
  label?: string;
  icon?: string;
  type: TableActionType;
  actionType: string; // action to be dispatched to page reducer
  formId?: string;
}

export interface TableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

export interface Table {
  id: string;
  title: string;
  isLoading: boolean;
  error?: { [key: string]: string };
  actions: TableAction[];
  headerActions?: TableAction[];
  columns: TableColumn[];
  excludedColumns: string[];
  displayedColumns: string[];
  dataSource: {
    url: string;
    params?: { [key: string]: string };
    handler: string;
  };
  data: { [key: string]: any }[];
  paginated: boolean;
  filterable: boolean;
  sortable: boolean;
  pagination?: {
    pageSize: number;
    pageNumber: number;
    total: number;
  };
  filter?: {
    data: { [key: string]: string };
    handler: string;
    // form
  };
  sort?: {
    columns: string[];
    direction: 'asc' | 'desc';
  };
}
