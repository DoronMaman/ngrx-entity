import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {  User } from '../model/article';

export function sortByRole(ob1: User, ob2: User): number {
   return ob1.role.localeCompare(ob2.role);
}
  
export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
   sortComparer: sortByRole
});
  
export const {
   selectIds: selectArticleIds,
   selectEntities: selectArticleEntities,
   selectAll: selectAllArticles,
   selectTotal: articlesCount
} = adapter.getSelectors(); 