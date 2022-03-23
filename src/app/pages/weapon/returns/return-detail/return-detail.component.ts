import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Form } from 'src/app/mms-common/models/form';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { AppState } from 'src/app/store/models/app.state';
import returnForm from '../return.form';
import returnItemsTableState from './return.table';

@Component({
  selector: 'app-return-detail',
  templateUrl: './return-detail.component.html',
  styleUrls: ['./return-detail.component.scss']
})
export class ReturnDetailComponent implements OnInit {
  form: Form = returnForm.returnItemForWeaponForm;
  dataSourceUrl = 'http://localhost:3000/returnItems';
  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'notifies' },
    { name: 'Edit', type: 'edit' },
  ];
  table = returnItemsTableState;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<AppState>
  ) {
    this.dataSourceUrl =
      this.dataSourceUrl +
      '?requestsId=' +
      this.activatedRoute.snapshot.params.id;
    if (this.table.links) {
      this.table = {
        ...this.table,
        links: { ...this.table.links, getPath: this.dataSourceUrl },
      };
    }
  }

  ngOnInit(): void {}
}
