// import ReviewsBlock from '../review/reviews-block';
import NearPlacesList from '../near-places/near-places-list';
import Map from '../map/map';
import React, {useEffect, useState} from 'react';
import Header from '../header/header';
import {State} from '../../types/state';
import {useParams} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {Offer} from '../../types/offer';
import {loadDetailedOffer, loadOfferReview, loadeNearByPlaces} from '../../store/api-actions';
import ReviewList from '../review/review-list';
import ReviewForm from '../review/review-form';
import {AuthorizationStatus} from '../../const';
// import ReviewForm from '../review/review-form';
// import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({
  detailedOffer,
  reviews,
  authorizationStatus,
  nearByPlaces,
}: State) => ({
  detailedOffer,
  reviews,
  authorizationStatus,
  nearByPlaces,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLoadDetailedOffer(offerId: string) {
    dispatch(loadDetailedOffer(offerId));
  },
  onOfferReviewsLoad(offerId: string) {
    dispatch(loadOfferReview(offerId));
  },
  onNearByPlacesLoad(offerId: string) {
    dispatch(loadeNearByPlaces(offerId));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function OfferDetailedPage(
  {
    detailedOffer,
    onLoadDetailedOffer,
    onOfferReviewsLoad,
    reviews,
    authorizationStatus,
    onNearByPlacesLoad,
    nearByPlaces,
  }: PropsFromRedux): JSX.Element {


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  //
  // const city = offers[0].city;
  //
  // const nearestPlaces = offers.slice(0, MAX_AMOUNT_NEAR_PLACE);
  //
  const onOfferMouseEnter = (offerId: string) => {
    const currentPoint = nearByPlaces.find((offer) => offer.id === offerId);
    setSelectedOffer(currentPoint);
  };

  const onOfferMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  const { id }  = useParams<{id: string}>();
  useEffect(() => {
    onLoadDetailedOffer(id);
    onOfferReviewsLoad(id);
    onNearByPlacesLoad(id);
  }, [id, onLoadDetailedOffer, onOfferReviewsLoad, onNearByPlacesLoad]);
  // eslint-disable-next-line no-console
  console.log(detailedOffer);

  return (
    <div className="page">
      <Header/>
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
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">{(detailedOffer?.isFavorite) ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ {width: `${(detailedOffer?.rating)}%`} }></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{detailedOffer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {detailedOffer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {detailedOffer?.bedrooms}
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
            {nearByPlaces && detailedOffer? (
              <Map
                cityLocation={detailedOffer.location}
                points={nearByPlaces.map((offer) => ({title: offer.title, location: offer.location}))}
                selectedPoint={selectedOffer}
              />
            ) : null}
          </section>
        </section>
        <div className="container">
          {nearByPlaces &&
          <NearPlacesList
            offers={nearByPlaces}
            onOfferMouseEnter={onOfferMouseEnter}
            onOfferMouseLeave={onOfferMouseLeave}
          />}
        </div>
      </main>
    </div>
  );
}

export default connector(OfferDetailedPage);
export {OfferDetailedPage};
