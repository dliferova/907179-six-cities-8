import {Offers} from '../types/offer';

export type State = {
  currentCity: string,
  cityOffers: Offers;
  offers: Offers;
  currentSortType: string;
};
