import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Form } from 'src/app/mms-common/models/form';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import tableActions from 'src/app/store/actions/table.actions';
import { AppState } from 'src/app/store/models/app.state';
import returnForm from './return.form';
import returnTableState from './return.table';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  form: Form = returnForm.returnForWeaponForm;
  dataSourceUrl = 'http://localhost:3000/returns';
  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'returns' },
    { name: 'Edit', type: 'edit' },
  ];

  table = returnTableState;
  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.store$.dispatch(tableActions.setTableState({ value: this.table }));
  }
}