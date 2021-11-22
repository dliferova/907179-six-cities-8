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
  type: string,
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

export type City = {
  name: string,
  location: Location,
}

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

export type OfferFromServer = {
  'city': {
    name: string,
    location: Location,
  },
  'preview_image': string;
  'images': string[];
  'title': string;
  'is_favorite': boolean;
  'is_premium': boolean;
  'rating': number;
  'type': string;
  'bedrooms': number;
  'max_adults': number;
  'price': number;
  'goods': string[];
  'host': HostInfoFromServer;
  'description': string;
  'location': Location;
  'placeType': string;
  'id': number;
}

type HostInfoFromServer = {
  'id': number;
  'name': string;
  'avatar_url': string;
  'is_pro': boolean;
}

export const adaptToClient = (data: OfferFromServer): Offer => ({
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
  type: data['type'],
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
  id: String(data['id']),
});

