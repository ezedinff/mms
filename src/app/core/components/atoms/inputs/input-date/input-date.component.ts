import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormElement } from '../../../organisms/form/models';

@Component({
  selector: 'app-input-date',
  template: `
    <mat-form-field [appearance]="'outline'">
      <mat-label>{{ formElement.placeholder }}</mat-label>
      <input
        matInput
        readonly
        [matDatepicker]="picker"
        [placeholder]="formElement.placeholder"
        [formControlName]="formElement.name"
        (dateChange)="dateChanged($event, formElement.name)"
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <!-- error -->
      <mat-error>
        {{ errors && errors[formElement.name] }}
      </mat-error>
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true,
    },
  ],
})
export class InputDateComponent implements OnInit, ControlValueAccessor {
  @Input() formElement!: FormElement;
  @Input() formControlName!: string;
  @Input() errors!: { [key: string]: string };
  control!: FormControl;
  constructor(private controlContainer: ControlContainer) {}
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  ngOnInit(): void {
    if (this.controlContainer && this.formControlName) {
      if (this.controlContainer.control?.get(this.formControlName)) {
        this.control = this.controlContainer.control?.get(
          this.formControlName
        ) as FormControl;
      }
    }
  }
  dateChanged(event: any, name: string) {
    console.log(event);
  }
}
