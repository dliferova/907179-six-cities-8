import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import AuthScreen from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-fount-screen/not-found-screen';
import OfferDetailedPage from '../offers/offer-detailed-page';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getOffers, getOffersLoadStatus} from '../../store/offers/selectors';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getOffersLoadStatus);
  const offers = useSelector(getOffers);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <AuthScreen />
        </Route>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <OfferDetailedPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen/>}
          // favoriteOffers.length > 0
          // ? () => <FavoritesScreen favoritesOffers ={favoriteOffers}/>
          // : () => <FavoritesScreenEmpty/
        />
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
