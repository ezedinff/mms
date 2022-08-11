import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';
import { Table } from 'src/app/core/components/organisms/table/models';
import { TableService } from 'src/app/core/components/organisms/table/table.service';
import tableActions from '../actions/table.actions';
import { TableState } from '../models/table.state';
import { FactoryService } from '../services/factory.service';

@Injectable()
export class TableEffect {
  $fetchData = createEffect(
    () =>
      this.actions$.pipe(
        ofType(tableActions.fetchData.type),
        mergeMap((action: { payload: { table: Table } }) => {
          const handler = action.payload.table.dataSource.handler;
          return this.factoryService
            .executeMethod(handler, action.payload)
            .pipe(
              distinctUntilChanged(),
              delay(3000),
              map((response: any) => {
                const columns = this.tableService.getColumns(
                  response.data,
                  action.payload.table.excludedColumns
                );
                const displayedColumns =
                  this.tableService.getDisplayedColumns(columns);
                return tableActions.updateTable({
                  table: {
                    ...action.payload.table,
                    columns,
                    displayedColumns,
                    data: response.data,
                    pagination: action.payload.table?.pagination
                      ? {
                          ...action.payload.table.pagination,
                          total: response.count,
                        }
                      : { total: response.count, pageSize: 10, pageNumber: 1 },
                  },
                });
              })
            );
        })
      ),
    { dispatch: true, debounce: { time: 5000 } }
  );

  constructor(
    private actions$: Actions,
    private factoryService: FactoryService,
    private tableService: TableService
  ) {}
}
