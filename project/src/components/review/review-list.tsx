import React from 'react';
import {Review, Reviews} from '../../types/reviews';
import ReviewItem from './review-list-item';
import dayjs from 'dayjs';

type ReviewListProps = {
  reviews: Reviews;
}

const MAX_REVIEW_COUNT = 10;

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  const userReviews = [...reviews]
    .sort((prev: Review, next: Review) => dayjs(next.date).diff(dayjs(prev.date)))
    .slice(0, MAX_REVIEW_COUNT);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{userReviews.length}</span></h2>
      <ul className="reviews__list">
        {
          userReviews
            .map((review) => (
              <ReviewItem
                key={review.id}
                review={review}
              />
            ))
        }
      </ul>
    </>
  );
}

export default ReviewList;
