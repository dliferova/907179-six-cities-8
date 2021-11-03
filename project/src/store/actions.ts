import {
  ActionType,
  CityChanged,
  LoginChanged,
  OffersLoaded,
  RequireAuthorization,
  RequireLogout,
  SortTypeChanged,
  RedirectedToRoute
} from '../types/action';

import {Offers} from '../types/offer';
import {SortType, AuthorizationStatus, AppRoute} from '../const';

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
