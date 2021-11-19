import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import {AppRoute} from '../../const';
import {getUserLogin} from '../../store/user/selector';
import {logoutAction} from '../../store/api-actions';
import {redirectedToRouter} from '../../store/actions';

function UserLoggedViewBar(): JSX.Element {
  const email = useSelector(getUserLogin);
  const dispatch = useDispatch();

  const handleClickSignOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(redirectedToRouter(AppRoute.Main));
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link"
          href="#"
          onClick={handleClickSignOut}
        >
          <span className="header__signout" >Sign out</span>
        </a>
      </li>
    </>
  );
}

export default UserLoggedViewBar;
