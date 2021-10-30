import {Offers} from './offer';
import {SortType} from '../const';

export type State = {
  cityOffers: Offers,
  offers: Offers,
  isDataLoaded: boolean,
  currentCity: string,
  currentSortType: SortType;
};
