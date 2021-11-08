import {UserData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

const initialState: UserData = {
  email: '',
  reviews: null,
};

const userReducer = (state = initialState, action: Actions): UserData => {
  switch (action.type) {
    case ActionType.loginChanged:
      return {...state,
        email: action.payload.login,
      };
    case ActionType.offerReviewsLoaded:
      return {...state,
        reviews: action.payload.reviews,
      };
    default:
      return state;
  }
};

export {userReducer};
