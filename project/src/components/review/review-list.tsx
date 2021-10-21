import React from 'react';
import {Reviews} from '../../types/offer';
import ReviewItem from './review-list-item';

type ReviewListProps = {
  reviews: Reviews,
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            id={review.id}
            reviewMessage={review.reviewMessage}
            date={review.date}
            rating={review.rating}
            author={review.author}
          />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
