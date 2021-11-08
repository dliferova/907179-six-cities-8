import {State} from '../../types/state';
import {NameSpace} from '../root-reducer';
import {Reviews} from '../../types/reviews';

export const getUserLogin = (state: State): string => state[NameSpace.UserData].email;
export const getUserReviews = (state: State): Reviews | null => state[NameSpace.UserData].reviews;
