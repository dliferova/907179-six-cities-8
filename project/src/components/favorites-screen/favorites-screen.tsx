import React, {useEffect} from 'react';
import Header from '../header/header';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoritesOffers} from '../../store/offers/selectors';
import {loadFavorites} from '../../store/api-actions';
import FavoritesListItem from './favorites-list-item';

function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useSelector(getFavoritesOffers);
  const hasFavoriteOffers = favoriteOffers.length !== 0;
  const favoriteOffersCities = new Set <string>();

  favoriteOffers.forEach((offer) => favoriteOffersCities.add(offer.city.name));

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);


  return (
    <div className="page">

      <Header/>

      { hasFavoriteOffers ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  [...favoriteOffersCities]
                    .map((city): JSX.Element => (
                      <FavoritesListItem
                        key={city}
                        city={city}
                        offers={favoriteOffers}
                      />
                    ))
                }
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future
        trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}
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

export default FavoritesScreen;
