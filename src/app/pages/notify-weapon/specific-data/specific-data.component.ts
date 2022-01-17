import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'src/app/mms-common/organisms/table/table.component';
import specificDataForm from './../specificData.form';
import specificWeaponForm from './../specificData.form';
import { NotifyService } from './../notify.service';

@Component({
  selector: 'app-specific-data',
  templateUrl: './specific-data.component.html',
  styleUrls: ['./specific-data.component.scss']
})
export class SpecificDataComponent implements OnInit {
  
  form = specificDataForm;
  url = "http://localhost:3000/notifies";

  actions: Array<Action> = [
    {name: 'Edit', type: 'edit'},
    { name: 'Delete', type: 'delete'}

                       ]
  constructor(private NotifyService: NotifyService) { }

  ngOnInit(): void {
    this.NotifyService.findAll(this.url);
  }

}
