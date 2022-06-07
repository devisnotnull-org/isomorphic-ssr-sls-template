import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

export interface IState {
  router: any;
}

const rootReducers = (history: any) =>
  combineReducers<IState>({
    router: connectRouter(history)
  });

export default rootReducers;
