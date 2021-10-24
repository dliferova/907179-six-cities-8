import {ActionType, SetCityAction, SetOffersAction} from '../types/action';
import {Offers} from '../types/offer';

export const setActiveCity = (activeCity: string): SetCityAction  => ({
  type: ActionType.SetCity,
  payload: activeCity,
});

export const setOfferList = (offers: Offers): SetOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});
