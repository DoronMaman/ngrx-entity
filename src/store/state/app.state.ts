import { EntityState } from '@ngrx/entity';
import {  User } from '../model/article';
export interface AppState {
	userState: UserState;
}

export interface UserState extends EntityState<User> {
	selectedArticleId: string | number | null;
} 