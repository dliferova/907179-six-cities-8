import React from 'react';
import {Offer} from '../../types/offer';
// import {Link} from 'react-router-dom';
// import {AppRoute} from '../../const';

type FavoriteCardItemProps = {
  offer: Offer;
}

function FavoriteCityPlaceCard(props: FavoriteCardItemProps): JSX.Element {
  const offer = props.offer;
  const {previewImage, price, title, city, room, isFavorite} = offer;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link"
            href="/"
          >
            <span>{city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <img className="place-card__image"
              src={previewImage}
              width="150"
              height="110"
              alt=""
            />
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className={isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
                type="button"
              >
                <svg className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">{`${isFavorite ? 'In bookmarks' : 'To bookmarks'}`}</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: '100%'}}/>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              {title}
            </h2>
            <p className="place-card__type">{room}</p>
          </div>
        </article>
      </div>
    </li>
  );
}

export default FavoriteCityPlaceCard;
