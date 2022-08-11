import { Form } from '../../../organisms/form/models';
import { Table } from '../../../organisms/table/models';

export type PageType = 'default' | 'default-detail' | 'tabbed' | 'stepped';
export interface Tab {
  id: string;
  title: string;
  forms?: Array<string>; // form ids
  tables?: Array<string>; // table ids
}
export interface StepAction {
  label: string;
  action: 'next' | 'previous' | 'submit';
}
export interface Step {
  id: string;
  title: string;
  forms?: Array<string>; // form ids
  tables?: Array<string>; // table ids
  actions: Array<StepAction>;
  isOptional: boolean;
  isEditable: boolean;
  isFinal: boolean;
}
export interface Page {
  id?: string;
  title?: string;
  pageType?: PageType;
  forms?: Array<Form>;
  tables?: Array<Table>;
  tabs?: Array<Tab>;
  steps?: Array<Step>;
  params?: { [key: string]: any };
  error?: string;
  message?: string;
  loading?: boolean;
  dialog?: Dialog;
}

// focus on dialog for showing form only for now.
export interface Dialog {
  id: string;
  title: string;
  form?: Form;
  actions: Array<DialogAction>;
}
export interface DialogAction {
  label: string;
  action: string;
}
