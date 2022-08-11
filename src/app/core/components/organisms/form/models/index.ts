export interface FormValidation {
  type:
    | 'required'
    | 'minLength'
    | 'maxLength'
    | 'max'
    | 'min'
    | 'email'
    | 'phone'
    | 'file';
  value: number | string | boolean;
}

export interface SelectableOption {
  value: string;
  label: string;
  referredValue?: string;
}

export interface FormElement {
  name: string;
  type:
    | 'text'
    | 'select'
    | 'date'
    | 'checkbox'
    | 'radio'
    | 'email'
    | 'number'
    | 'password'
    | 'file'
    | 'formArray'
    | 'hidden';
  placeholder: string;
  defaultValue: any;
  refer?: string;
  size?: number;
  computeValueFrom?: {
    elements: Array<string>;
    operator: '+' | '-' | '*' | '/';
  };
  options?: Array<SelectableOption>;
  validations?: Array<FormValidation>;
  formArrayItems?: Array<FormElement>;
}

export interface Form {
  id: string;
  title: string;
  elements: Array<FormElement>;
  isPrePopulated: boolean;
  data?: any;
  dataSource?: {
    // to pre-populate form with data
    url?: string;
    hasChild?: boolean;
    child?: {
      name: string;
      url: string;
    };
    handler: string;
  };
  submit?: {
    url: string;
    handler: string;
    data?: { [key: string]: any };
    response?: { [key: string]: any };
    isLoading?: boolean;
  };
}
