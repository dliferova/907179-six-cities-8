import {Action} from 'redux';
import {AxiosInstance} from 'axios';
import {
  ThunkAction
} from 'redux-thunk';

import {State} from './state';

export enum ActionType {
  CityChangedAction = 'app/city-changed',
  OffersLoadedAction = 'data/offers-loaded',
  PostCommentAction = 'data/post-new-comment',
  OfferReviewsLoadedAction = 'data/offers-comments-loaded',
  OfferDetailedLoadedAction = 'data/detailed-offer-loaded',
  SortTypeChangedAction = 'sort/sort-type-changed',
  RequireAuthorizationAction = 'user/require-authorization',
  RequireLogoutAction = 'user/require-logout',
  LoginChangedAction = 'user/login-added',
  RedirectedToRouteAction = 'user/redirect',
  LoadedNearbyOffersAction = 'data/near-by-places-loaded',
  LoadFavoritesOffersAction = 'data/load-favorite-offers',
  OfferUpdatedAction = 'data/offer-updated'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
