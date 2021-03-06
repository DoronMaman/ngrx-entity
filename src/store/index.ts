import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './state/app.state';
import * as articleReducer from './reducer/article.reducer';
import { environment } from '../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  userState: articleReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger] 
  : [];