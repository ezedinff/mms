import { createAction, props } from '@ngrx/store';
import { Table } from 'src/app/core/components/organisms/table/models';
import { TableState } from '../models/table.state';

const setTableState = createAction(
  '[Table] set table state',
  props<{ value: Partial<TableState> }>()
);

const updateTableState = createAction(
  '[Table] update table state',
  props<{ value: Partial<TableState> }>()
);

const updatePageNumber = createAction(
  '[Table] update page number',
  props<{ value: { pageNumber: number; pageSize: number; getPath: string } }>()
);

const addData = createAction(
  '[Table] add data',
  props<{ value: { data: any[]; totalItems: number; tableId: string } }>()
);

const addRow = createAction('[Table] add row', props<{ value: any }>());

const fetchData = createAction(
  '[Table] Fetch Data',
  props<{ payload: { table: Table } }>()
);
const fetchDataSuccess = createAction(
  '[Table] Success',
  props<{ data: any[]; totalItems: number; tableId: string }>()
);
const updateTable = createAction(
  '[Table] Update Table',
  props<{ table: Table }>()
);
export default {
  setTableState,
  updateTableState,
  updatePageNumber,
  addData,
  addRow,
  fetchData,
  fetchDataSuccess,
  updateTable,
};
