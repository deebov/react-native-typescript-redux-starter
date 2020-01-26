import { AnyAction } from 'redux';

export const FLUSH = 'FLUSH';

export function flush(): AnyAction {
  // localStorage.removeItem('selectedOrganization');
  return {
    type: FLUSH,
  };
}
