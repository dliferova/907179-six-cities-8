import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offersMock} from './mocks/offers-mock';
import {reviewsMock} from './mocks/reviews-mock';

const PLACES_COUNT = 458;

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount = {PLACES_COUNT}
      offers={offersMock}
      reviews={reviewsMock}
    />
  </React.StrictMode>,
  document.getElementById('root'));
