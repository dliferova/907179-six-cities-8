import NearPlacesList from '../near-places/near-places-list';
import Map from '../map/map';
import React, {useEffect} from 'react';
import Header from '../header/header';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadDetailedOffer, loadOfferReview, loadNearbyPlaces, postFavoriteAction} from '../../store/api-actions';
import ReviewList from '../review/review-list';
import ReviewForm from '../review/review-form';
import {AppRoute, AuthorizationStatus} from '../../const';
import {countRating} from '../../utils';
import {getDetailedOffer, getNearbyOffers} from '../../store/offers/selectors';
import {getUserReviews} from '../../store/user/selector';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function OfferDetailedPage(): JSX.Element {
  const detailedOffer = useSelector(getDetailedOffer);
  const reviews = useSelector(getUserReviews);
  const authorizationStatus =  useSelector(getAuthorizationStatus);
  const nearByOffers = useSelector(getNearbyOffers);

  const mapPoints = [
    ...(nearByOffers.slice(0, 3)
      .map((offer) => ({id: offer.id, location: offer.location}))),
    ...(detailedOffer ? [({id: detailedOffer.id, location: detailedOffer.location})] : []),
  ];

  const dispatch = useDispatch();
  const history = useHistory();

  const isFavorite = detailedOffer?.isFavorite;

  const {id} = useParams<{id: string}>();

  const handleBookmark = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }

    dispatch(postFavoriteAction(id, !isFavorite));
  };

  useEffect(() => {
    dispatch(loadDetailedOffer(id));
    dispatch(loadOfferReview(id));
    dispatch(loadNearbyPlaces(id));
    window.scroll(0, 0);
  }, [id, dispatch]);

  return (
    <div className="page">
      <Header/>
      {
        id === detailedOffer?.id ?
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {
                    detailedOffer?.images.map((image) => (
                      <div className="property__image-wrapper" key={`${image}-${detailedOffer.id}`}>
                        <img className="property__image" src={image} alt="Photography studio" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {detailedOffer?.isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {detailedOffer?.title}
                    </h1>
                    <button className={(detailedOffer?.isFavorite) ? 'property__bookmark-button property__bookmark-button--active button' : 'property__bookmark-button button'}
                      type="button"
                      onClick={handleBookmark}
                    >
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"/>
                      </svg>
                      <span className="visually-hidden">{(detailedOffer?.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={ {width: `${countRating(detailedOffer?.rating)}%`} }></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{detailedOffer?.rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {detailedOffer?.type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {detailedOffer?.bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {detailedOffer?.maxAdults} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{detailedOffer?.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {detailedOffer?.goods.map((item) => (
                        <li key={`${item}-${detailedOffer.title}`} className="property__inside-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="property__avatar user__avatar" src={detailedOffer?.host?.avatarUrl} width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="property__user-name">
                        {detailedOffer?.host?.name}
                      </span>
                      <span className="property__user-status">
                        {detailedOffer?.host.isPro && <span className="property__user-status">Pro</span>}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {detailedOffer?.description}
                      </p>
                    </div>
                  </div>

                  <section className="property__reviews reviews">
                    {reviews && <ReviewList reviews={reviews}/>}
                    {authorizationStatus === AuthorizationStatus.Auth && detailedOffer?.id ? <ReviewForm offerId={detailedOffer.id}/> : null}
                  </section>

                </div>
              </div>
              <section className="property__map map">
                {nearByOffers && detailedOffer? (
                  <Map
                    cityLocation={detailedOffer.location}
                    points={mapPoints}
                    selectedPoint={detailedOffer}
                  />
                ) : null}
              </section>
            </section>
            <div className="container">
              {nearByOffers &&
              <NearPlacesList
                offers={nearByOffers}
              />}
            </div>
          </main>
          : <div/>
      }
    </div>
  );
}

export default OfferDetailedPage;
