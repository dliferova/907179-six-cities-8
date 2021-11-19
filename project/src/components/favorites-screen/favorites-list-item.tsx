import {Offers} from '../../types/offer';
import OfferCardItem from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import React from 'react';

type FavoriteListProps = {
  offers: Offers,
  city: string,
}

function FavoritesListItem(props: FavoriteListProps): JSX.Element {
  const favoriteOffers = props.offers;
  const favoriteOfferCity = props.city;

  return (
    <li
      className="favorites__locations-items"
      data-testid="favorite offers"
    >
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{favoriteOfferCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.filter((offer) => offer.city.name === favoriteOfferCity)
          .map((favoriteOffer) => (
            <OfferCardItem
              key={favoriteOffer.id}
              type={OfferCardType.Favorites}
              offer={favoriteOffer}
              onMouseEnter={null}
              onMouseLeave={null}
            />))}
      </div>
    </li>
  );
}

export default FavoritesListItem;
