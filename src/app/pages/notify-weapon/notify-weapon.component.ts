import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import NotifyWeaponForm from './notify-weapon.form';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-notify-weapon',
  templateUrl: './notify-weapon.component.html',
  styleUrls: ['./notify-weapon.component.scss']
})
export class NotifyWeaponComponent implements OnInit {

  form = NotifyWeaponForm;
  url = "http://localhost:3000/notifies";
  
  excludeColumns = ['description'];


  actions: Array<Action> = [
    {name: 'Expand', type: 'expand', path: 'notify'},
    {name: 'Edit', type: 'edit'}
                       ]
  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.notifyService.findAll(this.url);
  }
}
