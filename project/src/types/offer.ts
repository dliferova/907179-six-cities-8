export type Offer = {
  id: string,
  imageUrls: string[],
  previewImage: string,
  title: string,
  description: string,
  type: OfferType,
  rating: number,
  bedrooms: number,
  maxAdults: number,
  price: number,
  amenities: string[],
  host: HostInfo,
  isPremium: boolean,
  isFavorite: boolean,
  city: {
    name: string
  }
};

export type Offers = Offer[];

export type HostInfo = {
  id: string,
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
