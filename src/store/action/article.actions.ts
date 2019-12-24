import { Action } from '@ngrx/store';
import {  User } from '../model/article';
import { Update } from '@ngrx/entity';

export enum UserActionTypes {
  ADD_ARTICLE = '[ARTICLE] Add Article',
  UPDATE_ARTICLE = '[ARTICLE] Update Article',

}

export class AddArticle implements Action { 
  readonly type = UserActionTypes.ADD_ARTICLE;
  constructor(public payload:   User ) {}
}
export class UpdateArticle implements Action {
    readonly type = UserActionTypes.UPDATE_ARTICLE;
    constructor(public payload: { article: Update<User> }) {}
  }

export type USER_ACTIONS = AddArticle|UpdateArticle  ;
                        