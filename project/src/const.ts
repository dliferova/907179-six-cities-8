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

export const enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum SortType {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}
