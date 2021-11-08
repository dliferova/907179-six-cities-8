import {Offer, Offers} from './offer';
import {Reviews} from './reviews';
import {SortType, AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

export type OffersData = {
  offers: Offers,
  detailedOffer: Offer | null,
  cityOffers: Offers,
  nearbyOffers: Offers,
  isDataLoaded: boolean,
  currentCity: string,
}

export type UserProcessData = {
  authorizationStatus: AuthorizationStatus,
}

export type UserData = {
  email: string,
  reviews: Reviews | null,
}

export type StateData = {
  currentSortType: SortType,
}

export type State = RootState;
