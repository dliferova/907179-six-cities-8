import {OfferCardType} from '../../const';

export const getArticleClass = (param: OfferCardType): string => {
  switch (param) {
    case OfferCardType.Favorites:
      return 'favorites__card place-card';
    case OfferCardType.NearPlaces:
      return 'near-places__card place-card';
    default:
      return 'cities__place-card place-card';
  }
};
export const getImageWrapper = (param: OfferCardType): string => {
  switch (param) {
    case OfferCardType.Favorites:
      return 'favorites__image-wrapper place-card__image-wrapper';
    case OfferCardType.NearPlaces:
      return 'near-places__image-wrapper place-card__image-wrapper';
    default:
      return 'cities__image-wrapper place-card__image-wrapper';
  }
};
