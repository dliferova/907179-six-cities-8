import {ActionType, CityChanged, OffersLoaded} from '../types/action';
import {Offers} from '../types/offer';

export const cityChanged = (activeCity: string): CityChanged  => ({
  type: ActionType.cityChanged,
  payload: activeCity,
});

export const offersLoaded = (offers: Offers): OffersLoaded => ({
  type: ActionType.offersLoaded,
  payload: offers,
});
