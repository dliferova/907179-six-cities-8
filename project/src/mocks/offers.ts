import {Offers, OfferType} from '../types/offer';

export const offers: Offers = [
  {
    // TODO guid
    id: 3130,
    imageUrls: ['img/apartment-01', 'img/apartment-02'],
    previewImage: '/img/apartment-01.jpg',
    title: 'Cosy flat Paris Center',
    description: 'Amazing Location by Hyde Park! Comfortable Single Studio Apartment on 2nd Floor with Private EN suite shower room. ' +
      'Newly Refurbished Sleeps only 1. Fresh Linen/Towels. Equipped Kitchenette. Communal Laundry Facilities. Excellent Location. Great Transport links! Ideal for solo adventurers or business travellers.',
    isPremium: false,
    isFavorite: false,
    type: OfferType.Apartment,
    rating: 4.8,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    amenities: ['Washing machine', ' Coffee machine', 'Dishwasher'],
    host: {
      // TODO guid
      id: 320,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: ' Angelina',
      isPro: false,
    },
  },
  {
    id: 9160,
    imageUrls: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    previewImage: 'img/apartment-02.jpg',
    title: 'Studio spa center',
    description: 'Slow down and relax. Peaceful and quiet location in the spa center. ' +
      'Easy and new designed loft studio is situated near the Hot Spring and the colonnades - walking distance within 2 minutes - in an old house (4th floor, no lift) in a street called the Steep street and it really is. There is a garden to relax.',
    isPremium: true,
    type: OfferType.Hotel,
    rating: 4.0,
    bedrooms: 1,
    maxAdults: 8,
    price: 160,
    amenities: ['Washing machine', 'Coffee machine', 'Dishwasher', 'Wifi', 'Hair dryer', 'Shared backyard'],
    host: {
      // TODO guid
      id: 622,
      avatarUrl: 'img/avatar-angelina.jpg',
      name: ' Olga',
      isPro: true,
    },
    isFavorite: false,
  },
  {
    id: 7613,
    imageUrls: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    previewImage: 'img/apartment-03.jpg',
    title: 'Romantic Getaway for 2 with natural wellness',
    description: 'Our luxurious Tiny House built in the middle of 2021 on the very edge of the forest with a huge covered terrace is the ideal place for romantic and relaxing holidays. Unique is the all-glass wall from the front of the house with a beautiful view of the adjacent forest and piles, on which the house stands at a height of 50 cm. From the comfort of the couch, you can watch the sunsets and the crackling fire in the private fireplace. Ideal location for exploring Bohemian and Saxon Switzerland NP.',
    isPremium: true,
    type: OfferType.House,
    rating: 4.8,
    bedrooms: 1,
    maxAdults: 2,
    price: 127,
    amenities: ['Kitchen', 'Washer', 'Dishwasher', 'Wifi', 'Hair dryer', 'Fire pit', 'TV', 'Outdoor shower'],
    host: {
      // TODO guid
      id: 859,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Boris',
      isPro: true,
    },
    isFavorite: false,
  },
  {
    id: 6306,
    imageUrls: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    previewImage: 'img/apartment-02.jpg',
    title: 'Signature Private Room in the Picturesque Canal District',
    description: 'Luxury Studio with no spared expense. Wake up in a heavenly bed right on the edge of Amsterdam\'s famous Browersgraght and Herengracht canals! Really get to enjoy all the best of the city being in the perfect proximity to everything central yet experience the real neighborhood comforts and culture. We aim to make your experience with us the very best possible, so please don\'t hesitate to ask us for assistance setting up a bike or where to grab a bite to eat!',
    isPremium: false,
    type: OfferType.PrivateRoom,
    rating: 4.4,
    bedrooms: 1,
    maxAdults: 4,
    price: 55,
    amenities: ['Kitchen', 'Wifi', 'Hair dryer'],
    host: {
      // TODO guid
      id: 632,
      avatarUrl: 'img/avatar-max.jpg',
      name: 'Petr',
      isPro: false,
    },
    isFavorite: false,
  },
];