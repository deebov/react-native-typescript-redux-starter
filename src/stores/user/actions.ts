import { AnyAction } from 'redux';
import { IUserState } from './reducer';

export const SET_USER = 'SET_USER';

export function setUser(user: IUserState): AnyAction {
  return {
    user,
    type: SET_USER,
  };
}
