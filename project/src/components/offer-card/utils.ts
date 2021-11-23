import {OfferCardType, OfferType} from '../../const';

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

export const getImageWidth = (param: OfferCardType): string => {
  switch (param) {
    case OfferCardType.Favorites:
      return '150';
    case OfferCardType.NearPlaces:
      return '260';
    default:
      return '260';
  }
};

export const getImageHeight = (param: OfferCardType): string => {
  switch (param) {
    case OfferCardType.Favorites:
      return '110';
    case OfferCardType.NearPlaces:
      return '200';
    default:
      return '200';
  }
};

export const getOfferType = (offerType: OfferType): string => {
  switch (offerType) {
    case OfferType.Apartment:
      return 'Apartment';
    case OfferType.Room:
      return 'Private room';
    case OfferType.House:
      return 'House';
    case OfferType.Hotel:
      return 'Hotel';
    default:
      throw new Error(`Not found offer type: ${offerType}`);
  }
};
