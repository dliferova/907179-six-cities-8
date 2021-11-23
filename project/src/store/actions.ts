import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {Offer, Offers} from '../types/offer';
import {Reviews} from '../types/reviews';
import {AppRoute, AuthorizationStatus, SortType} from '../const';

export const cityChanged = createAction(
  ActionType.CityChangedAction,
  (currentCity: string) => ({
    payload: {
      activeCity: currentCity,
    },
  }),
);

export const offersLoaded = createAction(
  ActionType.OffersLoadedAction,
  (offers: Offers) => ({
    payload: {
      offers,
    },
  }),
);

export const sortTypeChanged = createAction(
  ActionType.SortTypeChangedAction,
  (sortType: SortType) => ({
    payload: {
      currentSortType: sortType,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorizationAction,
  (authStatus: AuthorizationStatus) => ({
    payload: {
      authStatus: authStatus,
    },
  }),
);

export const logoutRequired = createAction(ActionType.RequireLogoutAction);

export const loginChanged = createAction(
  ActionType.LoginChangedAction,
  (login: string) => ({
    payload: {
      login,
    },
  }),
);

export const redirectedToRouter = createAction(
  ActionType.RedirectedToRouteAction,
  (url: AppRoute) => ({
    payload: {
      url,
    },
  }),
);

export const offerDetailedLoaded = createAction(
  ActionType.OfferDetailedLoadedAction,
  (offer: Offer) => ({
    payload: {
      offer,
    },
  }),
);

export const loadedOfferReviews = createAction(
  ActionType.OfferReviewsLoadedAction,
  (reviews: Reviews) => ({
    payload: {
      reviews,
    },
  }),
);

export const loadNearbyOffers = createAction(
  ActionType.LoadedNearbyOffersAction,
  (nearbyPlaces: Offers) => ({
    payload: {
      nearbyOffers: nearbyPlaces,
    },
  }),
);

export const loadFavoritesOffers = createAction(
  ActionType.LoadFavoritesOffersAction,
  (favoriteOffers: Offers) => ({
    payload: {
      favoriteOffers: favoriteOffers,
    },
  }),
);

export const offerUpdated = createAction(
  ActionType.OfferUpdatedAction,
  (updatedOffer: Offer) => ({
    payload: {
      updatedOffer: updatedOffer,
    },
  }),
);

