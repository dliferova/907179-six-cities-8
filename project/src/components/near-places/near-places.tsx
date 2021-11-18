import React from 'react';
import {Offers} from '../../types/offer';
import OfferCardItem from '../offer-card/offer-card';
import {OfferCardType} from '../../const';

type NearPlacesProps = {
  offers: Offers,
}

function NearPlaces(props: NearPlacesProps): JSX.Element {
  const nearestOffers = props.offers;

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearestOffers.map((nearestOffer) => (
          <OfferCardItem
            key={nearestOffer.id}
            type={OfferCardType.NearPlaces}
            offer={nearestOffer}
            onMouseEnter={null}
            onMouseLeave={null}
          />))}
      </div>
    </section>
  );
}

export default NearPlaces;
