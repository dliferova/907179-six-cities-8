import React from 'react';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {OfferCardType} from '../../const';

type CardItemProps = {
  type: OfferCardType;
  offer: Offer;
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

const getArticleClass = (param: OfferCardType): string => {
  switch (param) {
    case OfferCardType.Favorites:
      return 'favorites__card place-card';
    case OfferCardType.NearPlaces:
      return 'near-places__card place-card';
    default:
      return 'cities__place-card place-card';
  }
};

const getImageWrapper = (param: OfferCardType): string => {
  switch (param) {
    case OfferCardType.Favorites:
      return 'favorites__image-wrapper place-card__image-wrapper';
    case OfferCardType.NearPlaces:
      return 'near-places__image-wrapper place-card__image-wrapper';
    default:
      return 'cities__image-wrapper place-card__image-wrapper';
  }
};

function OfferCardItem(props: CardItemProps): JSX.Element {
  const offer = props.offer;
  const {id, previewImage, title, isPremium, type, price} = offer;

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
    <article className={getArticleClass(props.type)}
      onMouseEnter={() => props.onMouseEnter()}
      onMouseLeave={() => props.onMouseLeave()}
    >
      {renderPremiumTag()}
      <div className={getImageWrapper(props.type)}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
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
          <Link to={`${AppRoute.Room}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCardItem;
