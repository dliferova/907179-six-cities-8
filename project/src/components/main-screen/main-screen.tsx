import React, {useState} from 'react';
import OfferCardList from '../card-list/offer-card-list';
import Header from '../header/header';
import CitiesNavigation from '../cities-navigation/city-navigation';
import Map  from '../map/map';
import {Offer, Offers} from '../../types/offer';

type MainScreenProps = {
  placesCount: number;
  offers: Offers;
}

function MainScreen({placesCount, offers}: MainScreenProps): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const city = offers[0].city;

  const onOfferMouseEnter = (offerId: string) => {
    const currentPoint = offers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentPoint);
  };

  const onOfferMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">

        <CitiesNavigation/>

        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList
              placesCount={placesCount}
              offers={offers}
              onOfferMouseEnter={onOfferMouseEnter}
              onOfferMouseLeave={onOfferMouseLeave}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityLocation={city.location}
                  points={offers.map((offer) => ({title: offer.title, location: offer.location}))}
                  selectedPoint={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
