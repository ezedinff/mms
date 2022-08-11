import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Form, FormElement, SelectableOption } from './models';
import { ErrorHandler } from './services/error.handler';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  form!: Form;
  @Output()
  onFormSubmit = new EventEmitter();
  mmsForm!: FormGroup;
  errors!: { [key: string]: string };
  data: any = {};
  constructor(
    private formService: FormService,
    private errorHandler: ErrorHandler
  ) {
    this.errors = {};
  }

  ngOnInit(): void {
    this.mmsForm = this.formService.getNewFormGroup(this.form.elements);
    this.errorHandler.handleErrors(this.mmsForm, this.errors);
    if (this.form.isPrePopulated) {
      this.populatedData(this.form.data);
    }
    // setInterval(() => console.log(this.errors), 5000);
  }
  populatedData(data: any) {
    this.form.elements.forEach((element) => {
      if (element.type === 'formArray') {
        const formControls = data[element.name].map(() =>
          this.formService.getNewFormItem(element.formArrayItems ?? [])
        );
        formControls.forEach((formControl: AbstractControl, index: number) => {
          if (formControl instanceof FormGroup) {
            for (let control in formControl.controls) {
              formControl.controls[control].patchValue(
                data[element.name][index][control] ?? element.defaultValue
              );
            }
          }

          if (formControl instanceof FormControl) {
            formControl.patchValue(
              data[element.name][index] ?? element.defaultValue
            );
          }
        });

        const formArray = this.mmsForm.get(element.name) as FormArray;
        this.mmsForm.setControl(
          element.name,
          formControls ? new FormArray(formControls) : formArray
        );
      } else {
        (this.mmsForm.get(element.name) as FormControl).patchValue(
          data[element.name]
        );
      }
    });
  }

  getFormArrayItems(path: string) {
    return (this.mmsForm.get(path) as FormArray).controls;
  }
  getSizeDefault(size: number | undefined) {
    const s = (size ?? 12) * 8.3333;
    return size ? `0 1 calc(${s}% - 16px)` : `${s}%`;
  }
  setFileControl(results: Array<string>, controlName: string) {
    const fileControl = this.mmsForm.get(controlName) as FormControl;
    fileControl.patchValue(results.join(','));
  }
  filterByValue(
    element: FormElement,
    formArray?: string,
    index?: string
  ): Observable<Array<SelectableOption>> {
    return this.formService.filterByValue(
      this.mmsForm,
      this.data,
      element,
      formArray,
      index
    );
  }

  add(event: any, path: string, elements: Array<FormElement>) {
    event.preventDefault();
    this.formService.addFormItemToFromArray(
      this.mmsForm,
      this.form,
      path,
      elements
    );
  }

  remove(event: any, path: string, index: number) {
    event.preventDefault();
    this.formService.removeFormItemFromFormArray(this.mmsForm, path, index);
  }
  submit() {
    if (this.mmsForm.invalid) {
      this.mmsForm.markAllAsTouched();
      this.mmsForm.markAsDirty();
      this.errorHandler.findErrors(this.mmsForm.controls);
      return;
    }

    this.onFormSubmit.emit(this.mmsForm.value);
  }
}
