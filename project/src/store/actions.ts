import {ActionType, CityChanged, OffersLoaded, SortTypeChanged, ThunkActionResult} from '../types/action';
import {adaptToClient, Offers} from '../types/offer';
import {SortType, APIRoute} from '../const';

export const cityChanged = (activeCity: string): CityChanged  => ({
  type: ActionType.cityChanged,
  payload: {
    activeCity,
  },
});

export const loadOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(APIRoute.Offers);
    const offers = data.map((item: unknown) => adaptToClient(item));
    dispatch(offersLoaded(offers));
  };

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
