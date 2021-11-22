import {Offer, Offers} from '../../types/offer';
import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';

export const getDetailedOffer = (state: State): Offer | null => state[NameSpace.Offers].detailedOffer;
export const getCityOffers = (state: State): Offers => state[NameSpace.Offers].offers.filter((offer) => offer.city.name === getCurrentCity(state));
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offers].nearbyOffers;
export const getOffersLoadStatus = (state: State): boolean => state[NameSpace.Offers].isDataLoaded;
export const getCurrentCity = (state: State): string  => state[NameSpace.Offers].currentCity;
export const getFavoritesOffers = (state: State): Offers => state[NameSpace.Offers].favoriteOffers;
