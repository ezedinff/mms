import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Form, FormElement, FormValidation, SelectableOption } from '../models';

@Injectable()
export class FormService {
  constructor(private fb: FormBuilder) {}

  getValidator(validations?: Array<FormValidation>) {
    let temp: any = [];
    if (validations) {
      for (let validation of validations) {
        switch (validation.type) {
          case 'required':
            temp = [...temp, Validators.required];
            break;
          case 'maxLength':
            temp = [...temp, Validators.maxLength(validation.value as number)];
            break;
          case 'minLength':
            temp = [...temp, Validators.minLength(validation.value as number)];
            break;
          case 'email':
            temp = [...temp, Validators.email];
            break;
        }
      }
    }
    return temp;
  }

  getNewFormGroup(elements: Array<FormElement>): FormGroup {
    const temp: any = {};
    elements.forEach((element) => {
      if (!element.formArrayItems) {
        temp[element.name] = [
          element.defaultValue,
          this.getValidator(element.validations),
        ];
      } else {
        temp[element.name] = this.getNewFormArray(element.formArrayItems);
      }
    });
    return this.fb.group(temp);
  }

  getNewFormArray(elements: Array<FormElement>): FormArray {
    const item = this.getNewFormItem(elements);
    return this.fb.array([item]);
  }

  getNewFormItem(elements: Array<FormElement>): FormGroup | FormControl {
    if (elements.length > 1) {
      return this.getNewFormGroup(elements);
    }
    return this.fb.control(
      elements[0].defaultValue,
      this.getValidator(elements[0].validations)
    );
  }

  filterByValue(
    mmsForm: FormGroup,
    data: any,
    formElement: FormElement,
    formArray?: string,
    index?: string
  ): Observable<Array<SelectableOption>> {
    const formControl = mmsForm.get(
      `${formArray}.${index}.${formElement.name}` ?? ''
    );
    const pathOfRefer = formArray
      ? `${formArray}.${index || '0'}.${formElement.refer}`
      : formElement.refer;
    const elementPath = formArray
      ? `${formArray}.${index || '0'}.${formElement.name}`
      : formElement.name;
    const result =
      pathOfRefer && mmsForm.get(pathOfRefer)
        ? mmsForm.get(pathOfRefer)?.valueChanges.pipe(
            map((value) => {
              const d = formElement.options?.filter(
                (opt) => opt.referredValue == value
              );
              return d ? d : [];
            }),
            tap((value) => {
              // this.data[elementPath] = value;
              data[formElement.name] = value;
              console.log(data);
            })
          )
        : of(formElement.options ?? []);

    return result ?? of(formElement.options ?? []);
  }

  addFormItemToFromArray(
    mmsForm: FormGroup,
    form: Form,
    path: string,
    elements: Array<FormElement>
  ) {
    const formArray = mmsForm.get(path) as FormArray;
    const newItem = this.getNewFormItem(elements);
    formArray.push(newItem);
    // this.computeValues(form.elements);
  }
  removeFormItemFromFormArray(mmsForm: FormGroup, path: string, index: number) {
    const formArray = mmsForm.get(path) as FormArray;
    formArray.removeAt(index);
  }
}
