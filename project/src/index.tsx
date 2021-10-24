import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';

import {offersMock} from './mocks/offers-mock';
import {reviewsMock} from './mocks/reviews-mock';

const PLACES_COUNT = 458;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesCount = {PLACES_COUNT}
        offers={offersMock}
        reviews={reviewsMock}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
