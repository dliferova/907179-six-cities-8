import {ActionType, CityChanged, OffersLoaded, SortTypeChanged} from '../types/action';
import {Offers} from '../types/offer';

export const cityChanged = (activeCity: string): CityChanged  => ({
  type: ActionType.cityChanged,
  payload: activeCity,
});

export const offersLoaded = (offers: Offers): OffersLoaded => ({
  type: ActionType.offersLoaded,
  payload: offers,
});

export const sortTypeChanged = (sortType: string): SortTypeChanged => ({
  type: ActionType.sortTypeChanged,
  payload: {
    currentSortType: sortType,
  },
});
