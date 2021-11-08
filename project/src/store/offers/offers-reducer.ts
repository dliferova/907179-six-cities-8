import {Actions, ActionType} from '../../types/action';
import {OffersData} from '../../types/state';
import {cities} from '../../const';

const INITIAL_CITY = cities.Paris.name;

const initialState: OffersData = {
  offers: [],
  detailedOffer: null,
  cityOffers: [],
  nearbyOffers: [],
  isDataLoaded: false,
  currentCity: INITIAL_CITY,
};

const offersReducer = (state = initialState, action: Actions): OffersData => {
  switch (action.type) {
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
    case ActionType.loadedNearbyOffers:
      return {
        ...state,
        nearbyOffers: action.payload.nearbyOffers,
      };
    case ActionType.cityChanged:
      return {...state,
        currentCity: action.payload.activeCity,
        cityOffers: state.offers.filter((offer) => offer.city.name === action.payload.activeCity),
      };
    default:
      return state;
  }
};

export {offersReducer};
