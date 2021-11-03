import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {State} from '../../types/state';
import UserLoggedViewBar from './user-logged-view';
import UserNotLoggedViewBar from './user-not-logged-view';

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Header({authorizationStatus}: PropsFromRedux): JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link to={AppRoute.Main} className='header__logo-link header__logo-link--active'>
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41'/>
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              {authorizationStatus === AuthorizationStatus.Auth
                ? <UserLoggedViewBar/>
                : <UserNotLoggedViewBar/>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
