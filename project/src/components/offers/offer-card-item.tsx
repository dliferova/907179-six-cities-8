import React, {memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Offer} from '../../types/offer';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, OfferCardType} from '../../const';
import {getArticleClass, getImageWrapper, getImageHeight, getImageWidth} from './utils';
import {postFavoriteAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type CardItemProps = {
  type: OfferCardType;
  offer: Offer;
  onMouseEnter: (() => void) | null,
  onMouseLeave: (() => void) | null
}

function OfferCardItem(props: CardItemProps): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const offer = props.offer;
  const {id, previewImage, title, isPremium, isFavorite, type, price} = offer;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const handleBookmark = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    dispatch(postFavoriteAction(id, !isFavorite));
  };

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
      onMouseEnter={() => props.onMouseEnter && props.onMouseEnter()}
      onMouseLeave={() => props.onMouseLeave && props.onMouseLeave()}
    >
      {renderPremiumTag()}
      <div className={getImageWrapper(props.type)}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width={getImageWidth(props.type)} height={getImageHeight(props.type)} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={(offer.isFavorite) ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
            type="button"
            onClick={handleBookmark}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{(offer.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
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

export default memo(OfferCardItem);
