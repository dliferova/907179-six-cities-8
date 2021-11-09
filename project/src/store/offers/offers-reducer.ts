import {createReducer} from '@reduxjs/toolkit';
import {
  offersLoaded,
  offerDetailedLoaded,
  loadNearbyOffers,
  cityChanged
} from '../../store/actions';
import {OffersData} from '../../types/state';
import {cities} from '../../const';

const INITIAL_CITY = cities.Paris.name;

const initialState: OffersData = {
  offers: [],
  detailedOffer: null,
  nearbyOffers: [],
  isDataLoaded: false,
  currentCity: INITIAL_CITY,
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
    });
});
