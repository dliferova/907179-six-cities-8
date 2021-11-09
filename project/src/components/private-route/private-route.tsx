import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SignIn}/>
      )}
    />
  );
}

export default PrivateRoute;
