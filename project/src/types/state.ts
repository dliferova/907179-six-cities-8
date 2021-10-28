import {Offers} from './offer';
import {SortType} from '../const';

export type State = {
  currentCity: string,
  cityOffers: Offers;
  offers: Offers;
  currentSortType: SortType;
};
