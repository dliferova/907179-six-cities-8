import {Offers} from './offer';
import {SortType} from '../const';

export enum ActionType {
  cityChanged = 'app/city-changed',
  offersLoaded = 'app/offers-loaded',
  sortTypeChanged = 'sort/sort-type-changed'
}

export type CityChanged = {
  type: ActionType.cityChanged;
  payload: string;
}

export type OffersLoaded = {
  type: ActionType.offersLoaded;
  payload: Offers;
}

export type SortTypeChanged = {
  type: ActionType.sortTypeChanged;
  payload: {
    currentSortType: SortType,
  },
}

export type Actions = CityChanged | OffersLoaded | SortTypeChanged;
