import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Form } from '../../models/form';
import { CrudHttpService } from './crudHttp.service';
import {map, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
interface FormProps {
  form: Form;
  actionTitle: string;
  dataSourceUrl: string;
  actionType: 'create' | 'update' | 'delete' | 'expand';
  childUrl: string
}
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  form!: Form;
  actionTitle = 'save';
  dataSourceUrl!: string;
  actionType!: string;
  childUrl!: string;
  child$!:Observable<any>;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: FormProps,
    private crudService: CrudHttpService
  ) {}

  ngOnInit(): void {
    const { form, actionTitle, dataSourceUrl, actionType, childUrl } = this.inputData;
    this.form = form;
    this.actionTitle = actionTitle;
    this.dataSourceUrl = dataSourceUrl;
    this.actionType = actionType;
    this.childUrl = childUrl;
  }
  onSubmit(value: any) {
    this.child$ = of(value.notifyitems);
    delete value.notifyitems;
    console.log(value);

    if (this.actionType === 'create') {
      this.crudService.createOne(value, this.dataSourceUrl)
        .subscribe((r) => {
          this.child$.pipe(
            map((val)=> {
              val.forEach((y:any)=>{
                y.parentId = r.id;
                console.log(y);
                this.crudService.createOne(y, this.childUrl).subscribe()
              })
            })
          ).subscribe((r) => {
            this.dialogRef.close({
              message: 'Successfully created!',
              success: true,
            });}
          )});
    }

    if (this.actionType === 'edit') {
      this.crudService.updateOne(value, this.dataSourceUrl).subscribe((r) => {
        this.dialogRef.close({
          message: 'Successfully Updated!',
          success: true,
        });
      });
    }
  }
}
