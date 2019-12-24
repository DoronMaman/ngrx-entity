import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../action/article.actions';
import * as fromAdapter from '../adapter/acrticle.adapter';
import { UserState } from '../state/app.state';


export const initialState: UserState = fromAdapter.adapter.getInitialState({ 
                              selectedArticleId: null
                        });
export function reducer(state = initialState, action: fromActions.USER_ACTIONS): UserState {
  switch(action.type) {
    case fromActions.UserActionTypes.ADD_ARTICLE: {
      return fromAdapter.adapter.addOne(action.payload, state);
    }
    case fromActions.UserActionTypes.UPDATE_ARTICLE: {
        return fromAdapter.adapter.updateOne(action.payload.article, state);
      }     
    default: {
      return state;
    }
  }	
}

// export const getSelectedArticleId = (state: UserState) => state.selectedArticleId;

// export const getArticleState = createFeatureSelector<UserState>('articleState');

// export const selectArticleIds = createSelector(getArticleState, fromAdapter.selectArticleIds);
// export const selectArticleEntities = createSelector(getArticleState, fromAdapter.selectArticleEntities);
// export const selectAllArticles = createSelector(getArticleState, fromAdapter.selectAllArticles);
// export const articlesCount = createSelector(getArticleState, fromAdapter.articlesCount);

// export const selectCurrentArticleId = createSelector(getArticleState, getSelectedArticleId);

// export const selectCurrentArticle = createSelector(
//   selectArticleEntities,
//   selectCurrentArticleId,
//   (articleEntities, articleId) => articleEntities[articleId]
// )