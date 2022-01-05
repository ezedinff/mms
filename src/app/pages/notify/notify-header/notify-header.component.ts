import { Component, OnInit } from '@angular/core';
import notifyHeaderForm from "../notify-header.form";
import {Action} from "../../../mms-common/organisms/table/table.component";

@Component({
  selector: 'app-notify-header',
  templateUrl: './notify-header.component.html',
  styleUrls: ['./notify-header.component.scss']
})
export class NotifyHeaderComponent implements OnInit {

  form = notifyHeaderForm;
  url = 'http://localhost:3000/notifies';

  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'admin/notifies/' },
    { name: 'Edit', type: 'edit' },
    { name: 'Delete', type: 'delete'}
  ];
  excludeColumns = ['id','notifyitems'];
  constructor() {}

  ngOnInit(): void {}
}
