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
    location: Location,
    name: string,
  },
  location: Location,
};

export type Offers = Offer[];

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

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
