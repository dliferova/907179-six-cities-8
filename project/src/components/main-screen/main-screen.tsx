import React, {useState} from 'react';
import {Dispatch} from 'redux';
import OfferCardList from '../offers/offer-card-list';
import Header from '../header/header';
import CitiesNavigation from '../cities-navigation/city-navigation';
import Map  from '../map/map';
import {Offer} from '../../types/offer';
import {State} from '../../types/state';
import {cityChanged, logoutRequired} from '../../store/actions';
import {connect, ConnectedProps} from 'react-redux';
import {cities} from '../../const';
import {getCityOffers, getCurrentCity} from '../../store/offers/selectors';

const mapStateToProps = (state: State) => ({
  cityOffers: getCityOffers(state),
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onCityChange(city: string) {
    dispatch(cityChanged(city));
  },
  onLogout: () => dispatch(logoutRequired()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MainScreen(props: PropsFromRedux): JSX.Element {
  const {currentCity, cityOffers} = props;

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const city = Object.values(cities).find((item) =>  item.name === currentCity);

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
      <main className="page__main page__main--index">

        <CitiesNavigation/>

        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList
              offers={cityOffers}
              currentCity={currentCity}
              onOfferMouseEnter={onOfferMouseEnter}
              onOfferMouseLeave={onOfferMouseLeave}
            />
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityLocation={city ? city.location : cities.Paris.location}
                  points={cityOffers.map((offer) => ({title: offer.title, location: offer.location}))}
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

export {MainScreen};
export default connector(MainScreen);
