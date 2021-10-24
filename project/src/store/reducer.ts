import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {offersMock} from '../mocks/offers-mock';

const ACTIVE_CITY  = offersMock[0].city.name;

const initialState: State = {
  city: ACTIVE_CITY,
  offers: offersMock.filter((offer) => offer.city.name === ACTIVE_CITY),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, city: action.payload};
    case ActionType.SetOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
