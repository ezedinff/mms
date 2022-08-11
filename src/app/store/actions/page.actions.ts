import { createAction, props } from '@ngrx/store';
import { Page } from 'src/app/core/components/templates/pages/models';

const setPage = createAction('[Page] Set Page', props<{ page: Page }>());
const setPageError = createAction(
  '[Page] Set Page Error',
  props<{ error: string }>()
);
const setPageMessage = createAction(
  '[Page] Set Page Message',
  props<{ message: string }>()
);
const setPageLoading = createAction(
  '[Page] Set Page Loading',
  props<{ loading: boolean }>()
);

const openDialogWithForm = createAction(
  '[Page] Open Dialog With Form',
  props<{ payload: any }>()
);

const openDialogWithFormForEdit = createAction(
  '[Page] Open Dialog With Form For Edit',
  props<{ payload: any }>()
);

const closeDialogWithForm = createAction(
  '[Page] Close Dialog With Form',
  props<{ payload: any }>()
);

export const pageActions = {
  setPage,
  setPageError,
  setPageMessage,
  setPageLoading,
  openDialogWithForm,
  openDialogWithFormForEdit,
  closeDialogWithForm,
};
