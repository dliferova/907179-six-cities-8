import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import FavoritesScreen from './components/favorites-screen/favorites-screen';
import {offersMock} from './mocks/offers-mock';
import {reviews} from './mocks/reviews';

const PLACES_COUNT = 458;

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount = {PLACES_COUNT}
      offers={offersMock}
      reviews={reviews}
    />
    <FavoritesScreen offers={offersMock}/>
  </React.StrictMode>,
  document.getElementById('root'));
