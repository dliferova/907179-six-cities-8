export type OfferTypes = {
  id: number,
  imageUrls: string[],
  title: string,
  description: string,
  isPremium: boolean,
  type: OfferType,
  rating: number,
  bedrooms: number,
  maxAdults: number,
  price: number,
  amenities: string[],
  host: HostInfo,
  isFavorite: boolean,
};

export type Offers = OfferTypes[];

export type HostInfo = {
  id: number,
  avatarUrl: string,
  name: string,
  isPro: boolean
};

export enum OfferType {
  Apartment = 'apartment',
  PrivateRoom = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export type Review = {
  id: number,
  reviewMessage: string,
  date: number,
  rating: number,
  author: ReviewAuthor
};

export type Reviews = Review[];

export type ReviewAuthor = {
  id: number,
  avatarUrl: string,
  name: string,
  isPro: boolean
};
