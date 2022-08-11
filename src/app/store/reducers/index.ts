import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../models/app.state';
import { globalReducer } from './global.reducer';
import { environment } from '../../../environments/environment';
import { formReducer } from './form.reducer';
import { tableReducer } from './table.reducer';
import { pageReducer } from './page.reducer';

export const reducers: ActionReducerMap<AppState> = {
  global: globalReducer,
  form: formReducer,
  table: tableReducer,
  page: pageReducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
