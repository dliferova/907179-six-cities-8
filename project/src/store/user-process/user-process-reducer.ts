import {UserProcessData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {AuthorizationStatus} from '../../const';

const initialState: UserProcessData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcessReducer = (state = initialState, action: Actions): UserProcessData => {
  switch (action.type) {
    case ActionType.requireAuthorization:
      return{...state,
        authorizationStatus: action.payload.authStatus,
      };
    case ActionType.requireLogout:
      return {...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};

export {userProcessReducer};
