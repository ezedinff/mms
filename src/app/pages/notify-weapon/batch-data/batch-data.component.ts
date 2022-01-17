import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import NotifyWeaponForm from '../notify-weapon.form';
import { NotifyService } from './../notify.service';

@Component({
  selector: 'app-batch-data',
  templateUrl: './batch-data.component.html',
  styleUrls: ['./batch-data.component.scss']
})
export class BatchDataComponent implements OnInit {

  form = NotifyWeaponForm;
  url = "http://localhost:3000/notifies";
  
  activatedRoutes!: string;

  actions: Array<Action> = [
    { name: 'Expand', type: 'expand', path: 'details'},
    { name: 'Edit', type: 'edit'},
    { name: 'Delete', type: 'delete'}

                       ]
  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.notifyService.findAll(this.url);
  }

}
