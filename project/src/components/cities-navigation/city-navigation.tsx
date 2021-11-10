import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {cityChanged} from '../../store/actions';
import {cities} from '../../const';
import {getCurrentCity} from '../../store/offers/selectors';

function CitiesNavigation(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();

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
                      dispatch(cityChanged(item));
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

export default CitiesNavigation;
