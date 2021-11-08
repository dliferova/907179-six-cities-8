import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {reducer} from '../../../../../../../Library/Application Support/JetBrains/WebStorm2020.3/scratches/reducer';
import {ActionType} from '../../types/action';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.redirectedToRoute) {
          browserHistory.push(action.payload.url);
        }

        return next(action);
      };
