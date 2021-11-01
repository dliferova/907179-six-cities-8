import {ThunkActionResult} from '../types/action';
import {offersLoaded, requireAuthorization} from './actions';
import {saveToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';
import {adaptToClient} from '../types/offer';

export type AuthData = {
  login: string;
  password: string;
};

export const loadOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Offers);
    const offers = data.map((item: unknown) => adaptToClient(item));
    dispatch(offersLoaded(offers));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };


export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


