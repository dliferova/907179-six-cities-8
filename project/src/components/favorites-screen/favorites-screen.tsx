import React, {Dispatch} from 'react';
import '../favorites-screen/favorite-city-place-card';
import FavoriteCityPlaceCard from './favorite-city-place-card';
import Header from '../header/header';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Actions} from '../../types/action';
import {cityChanged} from '../../store/actions';
import {getOffers} from '../../store/offers/selectors';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(cityChanged(city));
  },
});
type PropsFromRedux = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);

function FavoritesScreen(props: PropsFromRedux): JSX.Element {
  const offers = props.offers;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved
              listing
            </h1>
            <ul className="favorites__list">
              {offers
                .filter((offer) => offer.isFavorite)
                .map((offer) => <FavoriteCityPlaceCard offer={offer} key={offer.id}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link"
          href="main.html"
        >
          <img className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export {FavoritesScreen};
export default connector(FavoritesScreen);
