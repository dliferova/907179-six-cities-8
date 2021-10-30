import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-fount-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
// import {Actions} from '../../types/action';
// import {offersLoaded} from '../../store/actions';
// import {Offers} from '../../types/offer';
import {State} from '../../types/state';

const mapStateToProps = ({isDataLoaded, offers}: State) => ({
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

function App({isDataLoaded}: ConnectedComponentProps): JSX.Element {
  if (!isDataLoaded) {
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
          <LoginScreen />
        </Route>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <PropertyScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <FavoritesScreen/>}
          authorizationStatus={AuthorizationStatus.Auth}
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
