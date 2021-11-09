import {UserProcessData} from '../../types/state';
import {logoutRequired, requireAuthorization} from '../../store/actions';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState: UserProcessData = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcessReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
    })
    .addCase(logoutRequired, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

