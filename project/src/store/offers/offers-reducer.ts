import {createReducer} from '@reduxjs/toolkit';
import {
  offersLoaded,
  offerDetailedLoaded,
  loadNearbyOffers,
  cityChanged,
  loadFavoritesOffers,
  offerUpdated
} from '../actions';
import {OffersData} from '../../types/state';
import {cities} from '../../const';
import {Offer, Offers} from '../../types/offer';

const INITIAL_CITY = cities.Paris.name;

const initialState: OffersData = {
  offers: [],
  detailedOffer: null,
  nearbyOffers: [],
  isDataLoaded: false,
  currentCity: INITIAL_CITY,
  favoriteOffers: [],
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(offersLoaded, (state, action) => {
      state.offers = action.payload.offers;
      state.isDataLoaded = true;
    })
    .addCase(offerDetailedLoaded, (state, action) => {
      state.detailedOffer = action.payload.offer;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.nearbyOffers;
    })
    .addCase(cityChanged, (state, action) => {
      state.currentCity = action.payload.activeCity;
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoriteOffers = action.payload.favoriteOffers;
    })
    .addCase(offerUpdated, (state, action) => {
      state.offers = updateOffers(state.offers, action.payload.updatedOffer);
      if (state.detailedOffer?.id === action.payload.updatedOffer.id) {
        state.detailedOffer = action.payload.updatedOffer;
      }
      state.nearbyOffers = updateOffers(state.nearbyOffers, action.payload.updatedOffer);
      state.favoriteOffers = updateOffers(state.favoriteOffers, action.payload.updatedOffer)
        .filter((item) => item.isFavorite);
    });
});

const updateOffers = (offers: Offers, updatedOffer: Offer): Offers => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (index === -1) {
    return offers;
  }

  return [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1),
  ];
};
