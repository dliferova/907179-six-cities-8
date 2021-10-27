import React from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'react';
import {cityChanged} from '../../store/actions';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {cities} from '../../const';

const mapStateToProps = ({currentCity}: State) => ({
  currentCity,
});

type CityNavItemProps = {

}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(cityChanged(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityNavItemProps;

function CitiesNavigation(props: ConnectedComponentProps): JSX.Element {
  const {onCityChange, currentCity} = props;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(cities)
              .map((item) => item.name)
              .map((item) => (
                <li key={item} className="locations__item">
                  <Link
                    className={`locations__item-link tabs__item ${item === currentCity && 'tabs__item--active'}`}
                    to="/"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onCityChange(item);
                    }}
                  >
                    <span>{item}</span>
                  </Link>
                </li>))}
          </ul>
        </section>
      </div>
    </>
  );
}

export {CitiesNavigation};
export default connector(CitiesNavigation);
