import {MAX_RATING_POINT, PERCENT} from './const';

export const countRating = (rating: any): number => (Math.round(rating) / MAX_RATING_POINT) * PERCENT;
