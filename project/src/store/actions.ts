import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/reviews';
import {AppRoute, AuthorizationStatus, SortType} from '../const';

export const cityChanged = createAction(
  ActionType.cityChanged,
  (currentCity: string) => ({
    payload: {
      activeCity: currentCity,
    },
  }),
);

export const offersLoaded = createAction(
  ActionType.offersLoaded,
  (offers: Offers) => ({
    payload: {
      offers,
    },
  }),
);

export const sortTypeChanged = createAction(
  ActionType.sortTypeChanged,
  (sortType: SortType) => ({
    payload: {
      currentSortType: sortType,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.requireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: {
      authStatus: authStatus,
    },
  }),
);

export const logoutRequired = createAction(ActionType.requireLogout);

export const loginChanged = createAction(
  ActionType.loginChanged,
  (login: string) => ({
    payload: {
      login,
    },
  }),
);

export const redirectedToRouter = createAction(
  ActionType.redirectedToRoute,
  (url: AppRoute) => ({
    payload: {
      url,
    },
  }),
);

export const offerDetailedLoaded = createAction(
  ActionType.offerDetailedLoaded,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

export const loadedOfferReviews = createAction(
  ActionType.offerReviewsLoaded,
  (reviews: Reviews) => ({
    payload: {
      reviews,
    },
  }),
);

export const loadNearbyOffers = createAction(
  ActionType.loadedNearbyOffers,
  (nearbyPlaces: Offers) => ({
    payload: {
      nearbyOffers: nearbyPlaces,
    },
  }),
);
