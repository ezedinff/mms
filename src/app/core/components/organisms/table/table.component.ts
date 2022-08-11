import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { AppState } from 'src/app/store/models/app.state';
import { Table, TableAction } from './models';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() tableId!: string;

  table$!: Observable<Table | undefined>;
  constructor(private tableService: TableService) {}
  ngOnInit(): void {
    this.table$ = this.tableService.getTable(this.tableId);
  }
  ngAfterViewInit(): void {
    this.tableService.fetchData(this.tableId);
  }
  command(command: TableAction, data: any) {
    this.tableService.executeCommand(this.tableId, command, data);
  }
  pageChange(pageEvent: any) {}
}
