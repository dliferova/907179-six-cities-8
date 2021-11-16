import {Offer, Offers} from './offer';
import {Reviews} from './reviews';
import {SortType, AuthorizationStatus} from '../const';
import {RootState} from '../store/root-reducer';

export type OffersData = {
  offers: Offers,
  detailedOffer: Offer | null,
  nearbyOffers: Offers,
  isDataLoaded: boolean,
  currentCity: string,
  favoriteOffers: Offers,
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
