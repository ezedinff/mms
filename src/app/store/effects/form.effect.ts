import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import formActions from '../actions/form.actions';
import {
  catchError,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
  take,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { CrudHttpService } from '../crud-http.service';
import { FormData, FormState } from '../models/form.state';
import { EMPTY, of } from 'rxjs';
import tableActions from '../actions/table.actions';
import { pageActions } from '../actions/page.actions';
import { FactoryService } from '../services/factory.service';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';
import { Page } from 'src/app/core/components/templates/pages/models';

@Injectable()
export class FormEffect {
  // $submitForm = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(formActions.setSubmittingForm.type),
  //     switchMap((action: { value: Omit<FormState, 'response'> }) =>
  //       this.crudHttpService.manageFormSubmission().pipe(
  //         mergeMap((response) => [
  //           formActions.formSubmittingSuccess({ value: response }),
  //           tableActions.addRow({ value: response[0] }),
  //         ]),
  //         catchError((error) =>
  //           of(formActions.formSubmittingFailure({ value: error }))
  //         )
  //       )
  //     )
  //   )
  // );

  // $fechDataFromRelations = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(formActions.setUpdatingForm.type),
  //     switchMap((action: { value: FormData }) =>
  //       this.crudHttpService.fetchDataFromRelations(action.value).pipe(
  //         map((response) =>
  //           formActions.setUpdatingFormWithRelations({ value: response })
  //         ),
  //         catchError((err) => of(formActions.formSubmittingFailure(err)))
  //       )
  //     )
  //   )
  // );

  $openFormForEdit = createEffect(() =>
    this.actions$.pipe(
      ofType(pageActions.openDialogWithFormForEdit.type),
      mergeMap((action: { payload: any }) => {
        return this.store
          .select((state) => state.page)
          .pipe(
            take(1),
            distinctUntilChanged(),
            map((page) =>
              page.forms?.find(
                (form) => form.id === action.payload.command.formId
              )
            ),
            map((form) => ({ ...action.payload, form }))
          );
      }),
      switchMap((action: any) => {
        const { form, ...payload } = action;
        return this.factoryService
          .executeMethod(form.dataSource.handler, {
            ...form.dataSource,
            parentId: payload.data.id,
          })
          .pipe(
            map((response) => {
              const data = form.dataSource?.child
                ? {
                    ...payload.data,
                    [form.dataSource.child.name]: response,
                  }
                : { ...payload.data };
              return formActions.updateForm({
                value: {
                  ...form,
                  data: data,
                  isPrePopulated: true,
                },
              });
            })
          );
      })
    )
  );

  $submitForm = createEffect(() =>
    this.actions$.pipe(
      ofType(formActions.submitForm.type),
      switchMap((action: { value: any }) =>
        this.factoryService
          .executeMethod(action.value.form.submit.handler, action.value)
          .pipe(
            map((response) => {
              return formActions.submitFormSuccess({ value: response });
            }),
            catchError((err) => of(formActions.submitFormFailure(err)))
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private factoryService: FactoryService,
    private store: Store<AppState>
  ) {}
}
