import {
  ActionType,
  CityChanged,
  LoginChanged,
  OfferDetailedLoaded,
  OfferReviewsLoaded,
  OffersLoaded,
  RedirectedToRoute,
  RequireAuthorization,
  RequireLogout,
  SortTypeChanged,
  NearbyOffersLoaded
} from '../types/action';

import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/reviews';
import {AppRoute, AuthorizationStatus, SortType} from '../const';

export const cityChanged = (activeCity: string): CityChanged  => ({
  type: ActionType.cityChanged,
  payload: {
    activeCity,
  },
});


export const offersLoaded = (offers: Offers): OffersLoaded => ({
  type: ActionType.offersLoaded,
  payload: {
    offers,
  },
});

export const sortTypeChanged = (sortType: SortType): SortTypeChanged => ({
  type: ActionType.sortTypeChanged,
  payload: {
    currentSortType: sortType,
  },
});

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization  => ({
  type: ActionType.requireAuthorization,
  payload: {
    authStatus: authStatus,
  },
});

export const logoutRequired = (): RequireLogout => ({
  type: ActionType.requireLogout,
});

export const loginChanged = (login: string): LoginChanged => ({
  type: ActionType.loginChanged,
  payload: {
    login,
  },
});

export const redirectedToRouter = (url: AppRoute): RedirectedToRoute => ({
  type: ActionType.redirectedToRoute,
  payload: {
    url,
  },
});

export const offerDetailedLoaded = (offer: Offer): OfferDetailedLoaded => ({
  type: ActionType.offerDetailedLoaded,
  payload: {
    offer,
  },
});

export const loadedOfferReviews = (reviews: Reviews): OfferReviewsLoaded => ({
  type: ActionType.offerReviewsLoaded,
  payload: {
    reviews,
  },
});

export const loadNerByPlaces = (nearByPlaces: Offers): NearbyOffersLoaded => ({
  type: ActionType.loadedNearbyOffers,
  payload: {
    nearbyOffers: nearByPlaces,
  },
});

