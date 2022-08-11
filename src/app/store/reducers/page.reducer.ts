import { createReducer, on } from '@ngrx/store';
import { Table } from 'src/app/core/components/organisms/table/models';
import formActions from '../actions/form.actions';
import { pageActions } from '../actions/page.actions';
import tableActions from '../actions/table.actions';
import { PageState } from '../models/page.state';
import { v4 as uuidv4 } from 'uuid';

const pageInitialState: PageState = {};

const onFetchSuccess = (
  state: PageState,
  { data, totalItems, tableId }: any
) => {
  let table = state.tables?.find((table) => table.id === tableId);
  if (table) {
    table = {
      ...table,
      data,
      pagination: table?.pagination
        ? { ...table.pagination, total: totalItems }
        : { total: totalItems, pageSize: 10, pageNumber: 1 },
    };
    return {
      ...state,
      tables: state?.tables
        ? [...state?.tables.filter((table) => table.id !== tableId), table]
        : [],
      loading: false,
    };
  }
  return { ...state, loading: false };
};

export const pageReducer = createReducer(
  pageInitialState,
  on(pageActions.setPage, (state, { page }) => ({ ...state, ...page })),
  on(pageActions.setPageError, (state, { error }) => ({ ...state, error })),
  on(pageActions.setPageMessage, (state, { message }) => ({
    ...state,
    message,
  })),
  on(pageActions.setPageLoading, (state, { loading }) => ({
    ...state,
    loading,
  })),
  on(tableActions.fetchData, (state, action) => {
    const tables = state.tables?.filter(
      (t) => t.id !== action.payload.table.id
    );
    if (tables) {
      return {
        ...state,
        tables: [...tables, { ...action.payload.table, isLoading: true }],
      };
    }
    return state;
  }),
  on(tableActions.fetchDataSuccess, onFetchSuccess),
  on(tableActions.updateTable, (state, { table }) => {
    const tables = state.tables?.filter((t) => t.id !== table.id);
    if (tables) {
      return { ...state, tables: [...tables, { ...table, isLoading: false }] };
    }
    return state;
  }),
  on(pageActions.openDialogWithForm, (state, { payload }) => {
    const form = state.forms?.find(
      (form) => form.id === payload.command.formId
    );
    if (form) {
      const dialog = {
        id: uuidv4(),
        title: form?.title,
        form,
        actions: [
          { label: payload.command.label ?? '', action: 'submit' },
          { label: 'Cancel', action: 'close' },
        ],
      };
      return { ...state, dialog };
    }
    return state;
  }),
  on(pageActions.closeDialogWithForm, (state, { payload }) => {
    const form = state.forms?.find((form) => form.id === payload.formId);
    if (form && state.forms) {
      return {
        ...state,
        forms: [
          ...state.forms?.filter((form) => form.id !== payload.formId),
          { ...form, isPrePopulated: false, data: undefined },
        ],
        dialog: undefined,
      };
    }
    return state;
  }),
  on(formActions.updateForm, (state, { value }) => {
    const form = state.forms?.find((form) => form.id === value.id);
    if (form && state?.forms) {
      const dialog = {
        id: uuidv4(),
        title: form?.title,
        form: value,
        actions: [
          { label: 'Update', action: 'submit' },
          { label: 'Cancel', action: 'close' },
        ],
      };
      return {
        ...state,
        dialog,
        forms: [
          ...state.forms?.filter((form) => form.id !== value.id),
          { ...form, ...value },
        ],
      };
    }
    return state;
  })
);
