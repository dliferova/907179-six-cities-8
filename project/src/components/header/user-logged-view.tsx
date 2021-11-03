import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {logoutRequired} from '../../store/actions';
import {AppRoute} from '../../const';
import {State} from '../../types/state';

const mapStateToProps = ({email}: State) => ({
  email,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogoutClicked() {
    dispatch(logoutRequired());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function UserLoggedViewBar({onLogoutClicked, email}: PropsFromRedux): JSX.Element {
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
            onLogoutClicked();
          }}
        >
          <span className="header__signout">Sign out</span>
        </a>

      </li>
    </>
  );
}

export {UserLoggedViewBar};
export default connector(UserLoggedViewBar);
