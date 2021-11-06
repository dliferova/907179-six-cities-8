import {Offer, Offers} from './offer';
import {Reviews} from './reviews';
import {SortType, AuthorizationStatus} from '../const';

export type State = {
  cityOffers: Offers,
  offers: Offers,
  isDataLoaded: boolean,
  currentCity: string,
  currentSortType: SortType,
  authorizationStatus: AuthorizationStatus,
  email: string,
  detailedOffer: Offer | null,
  reviews: Reviews | null,
};
