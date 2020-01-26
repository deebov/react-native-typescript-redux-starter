import { Reducer } from 'redux';
import { FLUSH } from '../actions';
import * as Actions from './actions';

export interface IUserState {
  id?: string;
  role: string;
  phoneNumber?: string;
  image?: string;
  email?: string;
  lastActive?: number;
  username?: string;
  state?: string;
  firstname: string;
  lastname: string;
  fullname: string;
  fiat?: string;
  createdAt?: number;
  subscribed?: boolean;
  pushTokens: string[];
}

export interface ForeignUser {
  id: string;
  email: string;
}

const initialState: IUserState = {
  firstname: '',
  lastname: '',
  fullname: '',
  role: '',
  pushTokens: [],
};

export const reducer: Reducer<IUserState> = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        ...action.user,
      };
    case FLUSH:
      return initialState;
    default:
      return state;
  }
};
