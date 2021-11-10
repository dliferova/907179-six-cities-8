import {UserData} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {loginChanged, loadedOfferReviews} from '../../store/actions';

const initialState: UserData = {
  email: '',
  reviews: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginChanged, (state, action) => {
      state.email = action.payload.login;
    })
    .addCase(loadedOfferReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    });
});
