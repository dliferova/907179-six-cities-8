import {ThunkActionResult} from '../types/action';
import {
  loadedOfferReviews,
  loadNearbyOffers,
  loginChanged,
  offerDetailedLoaded,
  offersLoaded,
  redirectedToRouter,
  requireAuthorization,
  loadFavoritesOffers,
  offerUpdated, logoutRequired
} from './actions';
import {dropToken, saveToken, Token} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToClient, OfferFromServer} from '../types/offer';
import {Comment, getAdaptedComments, ReviewsFromServer} from '../types/reviews';
import {toast} from 'react-toastify';

const REQUIRED_AUTH = 'Не забудьте авторизоваться';
const LOGIN_SUCCESS = 'Вы успешно авторизованы. Попробуйте все возможности 6 Cities.';
const LOGIN_ERROR = 'Вы успешно авторизованы. Попробуйте все возможности 6 Cities.';
const POST_ERROR_MESSAGE = 'Отзыв не удалось отправить. Проверьте подключение к интернету и повторите попытку.';
const FAILED_POST_FAVORITE = 'Не удалось добавить предложение в избранное. Попробуйте еще раз.';
const FAILED_GET_FAVORITE = 'Не удалось загрузить избранные предложения. Попробуйте еще раз.';

export type AuthData = {
  login: string;
  password: string;
};

export const loadOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<OfferFromServer[]>(APIRoute.Offers);
      const offers = data.map((item) => adaptToClient(item));
      dispatch(offersLoaded(offers));
    }
    catch {
      dispatch(offersLoaded([]));
    }
  };

export const loadDetailedOffer = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try{
      const {data} = await api.get<OfferFromServer>(`${APIRoute.Offers}/${id}`);
      const adaptedOffer = adaptToClient(data);
      dispatch(offerDetailedLoaded(adaptedOffer));
    }
    catch{
      dispatch(redirectedToRouter(AppRoute.NotFound));
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login)
        .then((response) => {
          if (response.data) {
            dispatch(loginChanged(response.data.email));
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
          }
        });
    } catch {
      toast.info(REQUIRED_AUTH);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try{
      const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(loginChanged(email));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectedToRouter(AppRoute.Main));
      toast.success(LOGIN_SUCCESS);
    } catch {
      toast.error(LOGIN_ERROR);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(logoutRequired());
  };

export const loadOfferReview = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewsFromServer>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(loadedOfferReviews(getAdaptedComments(data)));
  };

export const postCommentAction = ({commentText, rating}: Comment, offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<ReviewsFromServer>(`${APIRoute.Reviews}/${offerId}`, {comment: commentText, rating: rating});
      dispatch(loadedOfferReviews(getAdaptedComments(data)));
    }
    catch {
      toast.info(POST_ERROR_MESSAGE);
    }
  };

export const loadNearbyPlaces = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    const offers = data.map((item) => adaptToClient(item));
    dispatch(loadNearbyOffers(offers));
  };

export const loadFavorites = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<OfferFromServer[]>(APIRoute.Favorite);
      const offers = data.map((item) => adaptToClient(item));
      dispatch(loadFavoritesOffers(offers));
    } catch {
      toast.error(FAILED_GET_FAVORITE);
    }
  };

export const postFavoriteAction = (offerId: string, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try{
      const {data} = await api.post<OfferFromServer>(`${APIRoute.Favorite}/${offerId}/${isFavorite ? 1 : 0}`);
      const offer = adaptToClient(data);
      dispatch(offerUpdated(offer));
    } catch {
      toast.error(FAILED_POST_FAVORITE);
    }
  };
