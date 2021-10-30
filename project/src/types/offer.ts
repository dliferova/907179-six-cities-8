export type Offer = {
  city: {
    name: string,
    location: Location,
  },
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: OfferType,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: HostInfo,
  description: string,
  location: Location,
  id: string,
};

export type Offers = Offer[];

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type HostInfo = {
  id: number,
  name: string,
  isPro: boolean
  avatarUrl: string,
};

export enum OfferType {
  apartment,
  room,
  house,
  hotel,
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

export const adaptToClient = (data: any): Offer => ({
  city: {
    name: data['city']['name'],
    location: {
      latitude: data['city']['location']['latitude'],
      longitude: data['city']['location']['longitude'],
      zoom: data['city']['location']['zoom'],
    },
  },
  previewImage: data['preview_image'],
  images: data['images'],
  title: data['title'],
  isFavorite: data['is_favorite'],
  isPremium: data['is_premium'],
  rating: data['rating'],
  type: data['room'],
  bedrooms: data['bedrooms'],
  maxAdults: data['max_adults'],
  price: data['price'],
  goods: data['goods'],
  host: {
    id: data['host']['id'],
    name: data['host']['name'],
    isPro: data['host']['is_pro'],
    avatarUrl: data['host']['avatar_url'],
  },
  description: data['description'],
  location: {
    latitude: data['location']['latitude'],
    longitude: data['location']['longitude'],
    zoom: data['location']['zoom'],
  },
  id: data['id'],
});

