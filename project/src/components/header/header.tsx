import {memo} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import UserLoggedViewBar from './user-logged-view-bar';
import UserNotLoggedViewBar from './user-not-logged-view-bar';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

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

export default memo(Header);
