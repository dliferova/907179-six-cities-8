import React, {useState} from 'react';
import OfferCardItem from './offer-card-item';
import {Offer, Offers} from '../../types/offer';
import {OfferCardType} from '../../const';
import Sort from '../sort/sort';
import {SortType} from '../../const';
import {useSelector} from 'react-redux';
import {getCurrentSortType} from '../../store/state/selector';

const getSortedOffers = (currentSortType: string, offers: Offers) => {
  switch(currentSortType){
    case SortType.PriceIncrease: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortType.PriceDecrease: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortType.TopRatedFirst: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

type CardListProps = {
  onOfferMouseEnter: (offerId: string) => void,
  onOfferMouseLeave: () => void,
  currentCity: string,
  offers: Offers,
}

function OfferCardList(props: CardListProps): JSX.Element {
  const currentSortType = useSelector(getCurrentSortType);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const sortedOffers = getSortedOffers(currentSortType, props.offers);

  const onOfferMouseEnter = (offer: Offer) => {
    props.onOfferMouseEnter(offer.id);
    setActiveCardId(offer.id);
  };

  const onOfferMouseLeave = () => {
    props.onOfferMouseLeave();
    setActiveCardId(null);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{props.offers.length} places to stay in {props.currentCity}</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCardItem
            key={offer.id}
            type={OfferCardType.Cities}
            offer={offer}
            onMouseEnter={() => onOfferMouseEnter(offer)}
            onMouseLeave={() => onOfferMouseLeave()}
          />))}
      </div>
    </section>
  );
}

export default OfferCardList;
