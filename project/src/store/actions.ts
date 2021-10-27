import {ActionType, CityChanged, OffersLoaded, SortTypeChanged} from '../types/action';
import {Offers} from '../types/offer';
import {SortType} from '../const';

export const cityChanged = (activeCity: string): CityChanged  => ({
  type: ActionType.cityChanged,
  payload: activeCity,
});

export const offersLoaded = (offers: Offers): OffersLoaded => ({
  type: ActionType.offersLoaded,
  payload: offers,
});

export const sortTypeChanged = (sortType: SortType): SortTypeChanged => ({
  type: ActionType.sortTypeChanged,
  payload: {
    currentSortType: sortType,
  },
});
