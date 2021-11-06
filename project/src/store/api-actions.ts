import {ThunkActionResult} from '../types/action';
import {offersLoaded, requireAuthorization, loginChanged, redirectedToRouter, offerDetailedLoaded, loadedOfferReviews, loadNerByPlaces} from './actions';
import {saveToken, Token} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {OfferFromServer, adaptToClient} from '../types/offer';
import {ReviewsFromServer, Comment, getAdaptedComments} from '../types/reviews';

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
    // eslint-disable-next-line no-console
    console.log(data, adaptedOffer);
    dispatch(offerDetailedLoaded(adaptedOffer));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(loginChanged(response.data.email));
        // dispatch(loginChanged(response.data));
      });
  };


export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectedToRouter(AppRoute.Main));
  };

export const loadOfferReview = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ReviewsFromServer>(`${APIRoute.Reviews}/${offerId}`);
      dispatch(loadedOfferReviews(getAdaptedComments(data)));
    }
    catch {
      // eslint-disable-next-line no-console
      console.log('Не загружено');
    }
  };

export const postCommentAction = ({commentText, rating}: Comment, offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<ReviewsFromServer>(`${APIRoute.Reviews}/${offerId}`, {commentText, rating});
      dispatch(loadedOfferReviews(getAdaptedComments(data)));
    }
    catch {
      // eslint-disable-next-line no-console
      console.log('Не отправлено');
    }
  };

export const loadeNearByPlaces = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<OfferFromServer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
      const offers = data.map((item) => adaptToClient(item));
      dispatch(loadNerByPlaces(offers));
    }
    catch {
    // eslint-disable-next-line no-console
      console.log('Ошибка');
    }
  };
