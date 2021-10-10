import React, {useState} from 'react';
import OfferCardItem from '../card-item/offer-card-item';
import {CardListProps} from './card-list-type';

function OfferCardList(props: CardListProps): JSX.Element {
  const placesCount = props.placesCount;
  const offers = props.offers;
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in Amsterdam</b>
          Хаверим карточку {activeCardId}
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => <OfferCardItem offer={offer} key={offer.id} onMouseEnter={() => setActiveCardId(offer.id)} onMouseLeave={() => setActiveCardId(null)}/>)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"/>
        </div>
      </div>
    </div>
  );
}

export default OfferCardList;
