import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import AuthScreen from '../auth-screen/auth-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-fount-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
// import {Actions} from '../../types/action';
// import {offersLoaded} from '../../store/actions';
// import {Offers} from '../../types/offer';
import {State} from '../../types/state';

const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const mapStateToProps = ({authorizationStatus, isDataLoaded, offers}: State) => ({
  authorizationStatus,
  isDataLoaded,
  offers,
});

// const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
//   offersLoaded(offers: Offers) {
//     dispatch(offersLoaded(offers));
//   },
// });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type ConnectedComponentProps = PropsFromRedux;

function App({isDataLoaded, authorizationStatus}: ConnectedComponentProps): JSX.Element {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <AuthScreen />
        </Route>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <PropertyScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen/>}
        />
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
