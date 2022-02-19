import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Form } from 'src/app/mms-common/models/form';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import tableActions from 'src/app/store/actions/table.actions';
import { AppState } from 'src/app/store/models/app.state';
import approveForm from './approve.form';
import approveTableState from './approves.table';

@Component({
  selector: 'app-approves',
  templateUrl: './approves.component.html',
  styleUrls: ['./approves.component.scss']
})
export class ApprovesComponent implements OnInit {
  form: Form = approveForm.approveForm;
  dataSourceUrl = 'http://localhost:3000/approves';
  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'approves' },
    { name: 'Edit', type: 'edit' },
  ];

  table = approveTableState;
  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.store$.dispatch(tableActions.setTableState({ value: this.table }));
  }
}
