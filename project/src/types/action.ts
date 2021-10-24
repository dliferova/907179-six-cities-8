import {Offers} from './offer';

export enum ActionType {
  SetCity = 'app/set-city',
  SetOffers = 'app/set-offers-by-city',
}

export type SetCityAction = {
  type: ActionType.SetCity;
  payload: string;
}

export type SetOffersAction = {
  type: ActionType.SetOffers;
  payload: Offers;
}

export type Actions = SetCityAction | SetOffersAction;
