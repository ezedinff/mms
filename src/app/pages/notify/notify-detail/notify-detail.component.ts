import { Component, OnInit } from '@angular/core';
import notifyDetailForm from "../notify-detail.form";
import {ActivatedRoute} from "@angular/router";
import {NotifyDetailService} from "../notify-detail.service";
import {Action} from "../../../mms-common/organisms/table/table.component";

@Component({
  selector: 'app-notify-detail',
  templateUrl: './notify-detail.component.html',
  styleUrls: ['./notify-detail.component.scss']
})
export class NotifyDetailComponent implements OnInit {

  paramsId! : number;
  form = notifyDetailForm;
  url = 'http://localhost:3000/notifies';
  actions: Array<Action> = [
    { name: 'Edit', type: 'edit' },
    { name: 'Delete', type: 'delete' }
  ];
  excludeColumns = ['id','parentId'];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.paramsId = params.id;
      this.url = this.url+'/'+this.paramsId+'/'+'notifyitems';
    });
  }
}
