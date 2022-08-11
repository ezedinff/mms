import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import { Form } from '../../../organisms/form/models';
import { DialogAction } from '../models';
interface FormDialogProps {
  id: string;
  title: string;
  form: Form;
  actions: Array<DialogAction>;
}
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: FormDialogProps,
    private store$: Store<AppState>
  ) {}

  ngOnInit(): void {
    console.log(this.inputData);
  }

  onSubmit(data: any) {
    this.store$.dispatch({
      type: '[Form] submit form',
      value: {
        formId: this.inputData.id,
        data: this.inputData.form.data
          ? { ...this.inputData.form.data, ...data }
          : data,
        action: this.inputData.form.isPrePopulated ? 'update' : 'create',
        form: this.inputData.form,
      },
    });
  }
}
