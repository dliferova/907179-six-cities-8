import {Action} from 'redux';
import {AxiosInstance} from 'axios';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';

import {State} from './state';

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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
