import {combineReducers} from 'redux';
import {userProcessReducer} from './user-process/user-process-reducer';
import {offersReducer} from './offers/offers-reducer';
import {userReducer} from './user/user-reducer';
import {stateReducer} from './state/state-reducer';

export enum NameSpace {
  Offers= 'OFFERS',
  UserProcesses = 'USER_PROCESSES',
  UserData = 'USER_DATA',
  StateData = 'STATE_DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersReducer,
  [NameSpace.UserProcesses]: userProcessReducer,
  [NameSpace.UserData]: userReducer,
  [NameSpace.StateData]: stateReducer,
});

export type RootState = ReturnType<typeof rootReducer>
