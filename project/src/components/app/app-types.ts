import {Offers} from '../../types/offer';
import {Reviews} from '../../types/offer';

export type AppScreenProps = {
  placesCount: number;
  offers: Offers;
  reviews: Reviews;
}
