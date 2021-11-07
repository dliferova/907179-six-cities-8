import React from 'react';
import {Offer, Offers} from '../../types/offer';
import OfferCardItem from '../offers/offer-card-item';
import {OfferCardType} from '../../const';

type NearPlacesProps = {
  offers: Offers,
  onOfferMouseEnter: (offerId: string) => void;
  onOfferMouseLeave: () => void;
}

function NearPlacesList(props: NearPlacesProps): JSX.Element {
  const nearestOffers = props.offers;

  const onOfferMouseEnter = (offer: Offer) => {
    props.onOfferMouseEnter(offer.id);
  };

  const onOfferMouseLeave = () => {
    props.onOfferMouseLeave();
  };

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearestOffers.map((nearestOffer) => (
          <OfferCardItem
            key={nearestOffer.id}
            type={OfferCardType.NearPlaces}
            offer={nearestOffer}
            onMouseEnter={() => onOfferMouseEnter(nearestOffer)}
            onMouseLeave={() => onOfferMouseLeave()}
          />))}
      </div>
    </section>
  );
}

export default NearPlacesList;
