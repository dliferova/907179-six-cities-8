import {State} from '../../types/state';
import {SortType} from '../../const';
import {NameSpace} from '../root-reducer';

export const getCurrentSortType = (state: State): SortType => state[NameSpace.StateData].currentSortType;
