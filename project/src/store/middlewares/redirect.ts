import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {ActionType} from '../../types/action';
import {State} from '../../types/state';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.redirectedToRoute) {
          browserHistory.push(action.payload.url);
        }

        return next(action);
      };
