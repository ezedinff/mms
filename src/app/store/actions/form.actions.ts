import { createAction, props } from '@ngrx/store';
import { FormData, FormState } from '../models/form.state';

const setUpdatingForm = createAction(
  '[Form] update form',
  props<{ value: FormData }>()
);

const setUpdatingFormWithRelations = createAction(
  '[Form] update form with relations',
  props<{ value: FormData }>()
);

const emptyForm = createAction('[Form] empty form');
const EmptyAction = createAction('[Form] Empty Action');

const updateForm = createAction(
  '[Form] update form for editing',
  props<{ value: any }>()
);

const clearData = createAction('[Form] clear data');

const submitForm = createAction('[Form] submit form', props<{ value: any }>());

const submitFormSuccess = createAction(
  '[Form] form submitting success',
  props<{ value: any }>()
);

const submitFormFailure = createAction(
  '[Form] form submitting failure',
  props<{ value: any }>()
);

export default {
  setUpdatingForm,
  setUpdatingFormWithRelations,
  clearData,
  updateForm,
  EmptyAction,
  submitForm,
  submitFormSuccess,
  submitFormFailure,
};
