import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, timer } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs/operators';
import { AppState } from 'src/app/store/models/app.state';
import { Page } from '../../templates/pages/models';
import { Table, TableAction, TableColumn } from './models';

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor(private store$: Store<AppState>) {}
  getTable(tableId: string): Observable<Table | undefined> {
    return this.store$
      .select((state) => state.page)
      .pipe(
        map((page: Page) => {
          return page?.tables?.find((table) => table.id === tableId);
        })
      );
  }
  executeCommand(tableId: string, command: TableAction, data: any) {
    this.store$.dispatch({
      type: command.actionType,
      payload: {
        tableId,
        command,
        data,
      },
    });
  }

  async fetchData(tableId: string) {
    await this.store$
      .select((state) => state.page)
      .pipe(
        takeWhile(
          (page: Page) =>
            !page?.tables?.find((table) => table.id === tableId)?.isLoading
        ),
        map((page: Page) => {
          return page?.tables?.find((table) => table.id === tableId);
        }),
        tap((table: Table | undefined) => {
          if (table) {
            this.store$.dispatch({
              type: '[Table] Fetch Data',
              payload: {
                table,
              },
            });
          }
        })
      )
      .toPromise();
  }

  getColumns(
    data: Array<any>,
    excludedColumns: Array<string>
  ): Array<TableColumn> {
    // extract columns from data
    let columns = data.length > 0 ? Object.keys(data[0]) : [];
    if (excludedColumns) {
      columns = columns.filter((c) => !excludedColumns.includes(c));
    }

    // add additional column for actions and position
    columns = ['No', ...columns, ' '];

    // Describe the columns for <mat-table>.
    return columns.map((column: any, index: number) => {
      return {
        columnDef: column,
        header: column.replace(/([^A-Z])([A-Z])/g, '$1 $2'),
        cell: (element: any) =>
          `${
            column === 'No'
              ? ''
              : element && element[column]
              ? element[column]
              : ``
          }`,
      };
    });
  }

  getDisplayedColumns(columns: Array<TableColumn>): Array<string> {
    return columns.map((c) => c.columnDef);
  }
}
