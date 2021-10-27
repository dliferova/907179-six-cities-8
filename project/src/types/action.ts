import {Offers} from './offer';

export enum ActionType {
  cityChanged = 'app/city-changed',
  offersLoaded = 'app/offers-loaded',
}

export type CityChanged = {
  type: ActionType.cityChanged;
  payload: string;
}

export type OffersLoaded = {
  type: ActionType.offersLoaded;
  payload: Offers;
}

export type Actions = CityChanged | OffersLoaded;
