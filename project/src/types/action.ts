import {Offers, Offer} from './offer';
import {Reviews} from '../types/reviews';
import {SortType, AuthorizationStatus} from '../const';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';

export enum ActionType {
  cityChanged = 'app/city-changed',
  offersLoaded = 'data/offers-loaded',
  postComment = 'data/post-new-comment',
  offerReviewsLoaded = 'data/offers-comments-loaded',
  offerDetailedLoaded = 'data/detailed-offer-loaded',
  sortTypeChanged = 'sort/sort-type-changed',
  requireAuthorization = 'user/require-authorization',
  requireLogout = 'user/require-logout',
  loginChanged = 'user/login-added',
  redirectedToRoute = 'user/redirect',
  loadedNearbyOffers = 'data/near-by-places-loaded',
}

export type CityChanged = {
  type: ActionType.cityChanged;
  payload: {
    activeCity: string,
  };
}

export type OffersLoaded = {
  type: ActionType.offersLoaded;
  payload: {
    offers: Offers
  },
}

export type SortTypeChanged = {
  type: ActionType.sortTypeChanged;
  payload: {
    currentSortType: SortType,
  },
}

export type RequireAuthorization = {
  type: ActionType.requireAuthorization;
  payload: {
    authStatus: AuthorizationStatus,
  },
}

export type RequireLogout = {
  type: ActionType.requireLogout;
}

export type LoginChanged = {
  type: ActionType.loginChanged;
  payload: {
    login: string,
  },
}

export type RedirectedToRoute = {
  type: ActionType.redirectedToRoute;
  payload: {
    url: string,
  }
}

export type OfferDetailedLoaded = {
  type: ActionType.offerDetailedLoaded;
  payload: {
    offer: Offer,
  }
}

export type OfferReviewsLoaded = {
  type: ActionType.offerReviewsLoaded;
  payload: {
    reviews: Reviews,
  }
}

export type PostNewComment = {
  type: ActionType.postComment;
  payload: {
    comment: Comment,
  }
}

export type NearbyOffersLoaded = {
  type: ActionType.loadedNearbyOffers;
  payload: {
    nearByPlaces: Offers,
  }
}

export type Actions = CityChanged | OffersLoaded | SortTypeChanged | RequireAuthorization | RequireLogout | LoginChanged | RedirectedToRoute| OfferDetailedLoaded | OfferReviewsLoaded | PostNewComment | NearbyOffersLoaded;
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
