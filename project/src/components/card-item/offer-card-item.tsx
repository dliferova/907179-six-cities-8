import React from 'react';
import {Offer} from '../../types/offer';

type CardItemProps = {
  offer: Offer;
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

function OfferCardItem(props: CardItemProps): JSX.Element {
  const offer = props.offer;
  const {previewImage, title, isPremium, type, price} = offer;

  const renderPremiumTag = () => {
    if (isPremium) {
      return (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      );
    }
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => props.onMouseEnter()} onMouseLeave={() => props.onMouseLeave()}>
      {renderPremiumTag()}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCardItem;