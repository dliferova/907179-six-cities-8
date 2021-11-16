export const MAX_RATING_POINT = 5;
export const PERCENT = 100;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '/404',
}

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  FavoriteStatus = '/favorite/hotel_id/:status',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Test = '/test'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const enum OfferCardType {
  Cities,
  NearPlaces,
  Favorites,
}

export const cities = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.8503396,
      longitude: 4.3517103,
      zoom: 10,
    },
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
  },
} as const;

export enum SortType {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}
