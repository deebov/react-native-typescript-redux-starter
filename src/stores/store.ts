import { combineReducers } from 'redux';
import { IUserState, reducer as UserReducer } from './user/reducer';

export interface ApplicationState {
  user: IUserState;
}

export const rootReducer = combineReducers<ApplicationState>({
  user: UserReducer,
});
