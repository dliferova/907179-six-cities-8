import {Offers} from '../../types/offer-types';
import {Reviews} from '../../types/offer-types';

export type AppScreenProps = {
  placesCount: number;
  offers: Offers;
  reviews: Reviews;
}
