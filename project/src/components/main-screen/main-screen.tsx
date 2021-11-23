import React, {useState} from 'react';
import OfferCardList from '../offer-card/offer-card-list';
import Header from '../header/header';
import CitiesNavigation from '../cities-navigation/cities-navigation';
import Map  from '../map/map';
import {Offer} from '../../types/offer';
import {useSelector} from 'react-redux';
import OffersEmpty from '../offers-empty/offers-empty';
import {getCityOffers, getCurrentCity} from '../../store/offers/selectors';

function MainScreen(): JSX.Element {
  const cityOffers = useSelector(getCityOffers);
  const currentCity = useSelector(getCurrentCity);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onOfferMouseEnter = (offerId: string) => {
    const currentPoint = cityOffers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentPoint);
  };

  const onOfferMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={cityOffers.length === 0 ? 'page__main page__main--index page__main--index-empty' : 'page__main page__main--index'}>

        <CitiesNavigation/>

        <div className="cities">
          <div className="cities__places-container container">
            {cityOffers.length === 0
              ? <OffersEmpty currentCity={currentCity}/>
              :
              <>
                <OfferCardList offers={cityOffers} currentCity={currentCity} onOfferMouseEnter={onOfferMouseEnter} onOfferMouseLeave={onOfferMouseLeave}/>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      cityLocation={cityOffers[0].city.location}
                      points={cityOffers.map((offer) => ({id: offer.id, location: offer.location}))}
                      selectedPoint={selectedOffer}
                    />
                  </section>
                </div>
              </>}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
