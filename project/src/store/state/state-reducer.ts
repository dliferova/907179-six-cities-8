import {StateData} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {SortType} from '../../const';

const initialState: StateData = {
  currentSortType: SortType.Popular,
};

const stateReducer = (state = initialState, action: Actions): StateData => {
  switch (action.type) {
    case ActionType.sortTypeChanged:
      return{...state,
        currentSortType: action.payload.currentSortType,
      };
    default:
      return state;
  }
};

export {stateReducer};
