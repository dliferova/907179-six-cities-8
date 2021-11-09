import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logoutRequired} from '../../store/actions';
import {AppRoute} from '../../const';
import {getUserLogin} from '../../store/user/selector';

function UserLoggedViewBar(): JSX.Element {
  const email = useSelector(getUserLogin);

  const dispatch = useDispatch();

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
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutRequired());
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>

      </li>
    </>
  );
}

export default UserLoggedViewBar;
