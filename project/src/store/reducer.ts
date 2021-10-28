import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {cities, SortType} from '../const';

const INITIAL_CITY = cities.Paris.name;

const initialState: State = {
  currentCity: INITIAL_CITY,
  cityOffers: [],
  offers: [],
  currentSortType: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.cityChanged:
      return {...state,
        currentCity: action.payload,
        cityOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      };
    case ActionType.offersLoaded:
      return {...state,
        offers: action.payload,
        cityOffers: action.payload.filter((offer) => offer.city.name === state.currentCity),
      };
    case ActionType.sortTypeChanged:
      return{...state,
        currentSortType: action.payload.currentSortType,
      };
    default:
      return state;
  }
};

export {reducer};
