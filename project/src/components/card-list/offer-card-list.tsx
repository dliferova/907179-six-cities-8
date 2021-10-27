import React, {useState} from 'react';
import OfferCardItem from '../card-item/offer-card-item';
import {Offer, Offers} from '../../types/offer';
import {OfferCardType} from '../../const';
import Sort from '../sort/sort';
import {SortType} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';

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

const mapStateToProps = ({currentSortType}: State) => ({
  currentSortType,
});

const connector = connect(mapStateToProps);

type CardListProps = {
  onOfferMouseEnter: (offerId: string) => void,
  onOfferMouseLeave: () => void,
  currentCity: string,
  offers: Offers,
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & CardListProps;

function OfferCardList({
  currentCity,
  currentSortType,
  onOfferMouseEnter,
  onOfferMouseLeave,
  offers,
}: ConnectedComponentProps): JSX.Element {

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const sortedOffers = getSortedOffers(currentSortType, offers);

  const onOfferMouseEnterF = (offer: Offer) => {
    onOfferMouseEnter(offer.id);
    setActiveCardId(offer.id);
  };

  const onOfferMouseLeaveF = () => {
    onOfferMouseLeave();
    setActiveCardId(null);
  };

  //TODO убрать временный текст 33 строка, используется для устранения ошибки "неиспользуемая переменная activeCardId"

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity}</b>
      Хаверим карточку {activeCardId}
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCardItem
            key={offer.id}
            type={OfferCardType.Cities}
            offer={offer}
            onMouseEnter={() => onOfferMouseEnterF(offer)}
            onMouseLeave={() => onOfferMouseLeaveF()}
          />))}
      </div>
    </section>
  );
}

export {OfferCardList};
export default connector(OfferCardList);
