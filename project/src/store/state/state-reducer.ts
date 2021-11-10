import {createReducer} from '@reduxjs/toolkit';
import {StateData} from '../../types/state';
import {sortTypeChanged} from '../../store/actions';
import {SortType} from '../../const';


const initialState: StateData = {
  currentSortType: SortType.Popular,
};

export const stateReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sortTypeChanged, (state, action) => {
      state.currentSortType = action.payload.currentSortType;
    });
});
