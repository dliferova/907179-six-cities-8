import {Offers} from './offer';
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
  sortTypeChanged = 'sort/sort-type-changed',
  requireAuthorization = 'user/require-authorization',
  requireLogout = 'user/require-logout',
  loginChanged = 'user/login-added'
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

export type Actions = CityChanged | OffersLoaded | SortTypeChanged | RequireAuthorization | RequireLogout | LoginChanged;
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
