import {ThunkActionResult} from '../types/action';
import {offersLoaded, requireAuthorization, loginChanged, redirectedToRouter, offerDetailedLoaded} from './actions';
import {saveToken, Token} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {OfferFromServer} from '../types/offer';
import {adaptToClient} from '../types/offer';

export type AuthData = {
  login: string;
  password: string;
};

export const loadOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(APIRoute.Offers);
    const offers = data.map((item) => adaptToClient(item));
    dispatch(offersLoaded(offers));
  };

export const loadDetailedOffer = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer>(`${APIRoute.Offers}/${id}`);
    const adaptedOffer = adaptToClient(data);
    dispatch(offerDetailedLoaded(adaptedOffer));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then((response): void => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        // dispatch(loginChanged(response.data.email));
        dispatch(loginChanged(response.data));
      });
  };


export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectedToRouter(AppRoute.Main));
  };
