import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Form } from 'src/app/mms-common/models/form';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import tableActions from 'src/app/store/actions/table.actions';
import { AppState } from 'src/app/store/models/app.state';
import approveForm from '../approves/approve.form';
import approveItemsTableState from './approve.table';

@Component({
  selector: 'app-approve-detail',
  templateUrl: './approve-detail.component.html',
  styleUrls: ['./approve-detail.component.scss']
})
export class ApproveDetailComponent implements OnInit {
  form: Form = approveForm.approveItemForm;
  dataSourceUrl = 'http://localhost:3000/approveItems';
  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'approves' },
    { name: 'Edit', type: 'edit' },
  ];
  table = approveItemsTableState;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<AppState>
  ) {
    this.dataSourceUrl =
      this.dataSourceUrl +
      '?notifiesId=' +
      this.activatedRoute.snapshot.params.id;

    if (this.table.links) {
      this.table.links.getPath = this.dataSourceUrl;
    }

    this.store$.dispatch(tableActions.setTableState({ value: this.table }));
  }

  ngOnInit(): void {}
}
