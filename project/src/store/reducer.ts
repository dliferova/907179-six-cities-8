import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus, cities, SortType} from '../const';

const INITIAL_CITY = cities.Paris.name;

const initialState: State = {
  cityOffers: [],
  offers: [],
  isDataLoaded: false,
  currentCity: INITIAL_CITY,
  currentSortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  email: '',
  detailedOffer: null,
  reviews: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.cityChanged:
      return {...state,
        currentCity: action.payload.activeCity,
        cityOffers: state.offers.filter((offer) => offer.city.name === action.payload.activeCity),
      };
    case ActionType.offersLoaded:
      return {...state,
        offers: action.payload.offers,
        cityOffers: action.payload.offers.filter((offer) => offer.city.name === state.currentCity),
        isDataLoaded: true,
      };
    case ActionType.offerDetailedLoaded:
      return {...state,
        detailedOffer: action.payload.offer,
      };
    case ActionType.sortTypeChanged:
      return{...state,
        currentSortType: action.payload.currentSortType,
      };
    case ActionType.requireAuthorization:
      return{...state,
        authorizationStatus: action.payload.authStatus,
      };
    case ActionType.requireLogout:
      return {...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
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

export {reducer};
